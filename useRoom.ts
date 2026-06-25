'use client';
import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase';
import { Room, Message, RoomMember } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export function useRoom(roomId: string, userId: string) {
  const [room, setRoom] = useState<Room | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [members, setMembers] = useState<RoomMember[]>([]);
  const [isTyping, setIsTyping] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    if (!roomId || !userId) return;
    fetchRoom();
    fetchMessages();
    fetchMembers();
    markOnline();

    const channel = supabase
      .channel(`room:${roomId}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `room_id=eq.${roomId}`,
      }, (payload) => {
        setMessages(prev => [...prev, payload.new as Message]);
      })
      .on('broadcast', { event: 'typing' }, ({ payload }) => {
        if (payload.user_id !== userId) {
          setIsTyping(prev => ({ ...prev, [payload.user_id]: payload.is_typing }));
        }
      })
      .on('broadcast', { event: 'presence' }, ({ payload }) => {
        setMembers(prev =>
          prev.map(m => m.user_id === payload.user_id
            ? { ...m, is_online: payload.is_online, last_seen: payload.last_seen }
            : m
          )
        );
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
      markOffline();
    };
  }, [roomId, userId]);

  const fetchRoom = async () => {
    const { data } = await supabase.from('rooms').select('*').eq('id', roomId).single();
    if (data) setRoom(data);
    setLoading(false);
  };

  const fetchMessages = async () => {
    const { data } = await supabase
      .from('messages')
      .select('*, sender:users(id, full_name, avatar_url)')
      .eq('room_id', roomId)
      .order('created_at', { ascending: true })
      .limit(100);
    if (data) setMessages(data as Message[]);
  };

  const fetchMembers = async () => {
    const { data } = await supabase
      .from('room_members')
      .select('*, user:users(id, full_name, avatar_url, email)')
      .eq('room_id', roomId);
    if (data) setMembers(data as RoomMember[]);
  };

  const markOnline = async () => {
    await supabase.from('room_members').upsert({
      room_id: roomId, user_id: userId, is_online: true, last_seen: new Date().toISOString(),
    }, { onConflict: 'room_id,user_id' });
  };

  const markOffline = async () => {
    await supabase.from('room_members').update({
      is_online: false, last_seen: new Date().toISOString(),
    }).eq('room_id', roomId).eq('user_id', userId);
  };

  const sendMessage = async (content: string, type: 'text' | 'voice' | 'reaction' = 'text', voiceUrl?: string) => {
    const message = {
      id: uuidv4(),
      room_id: roomId,
      sender_id: userId,
      content,
      type,
      voice_url: voiceUrl,
      reactions: {},
      read_by: [userId],
      created_at: new Date().toISOString(),
    };
    await supabase.from('messages').insert(message);
  };

  const sendTyping = useCallback(async (isTypingNow: boolean) => {
    const channel = supabase.channel(`room:${roomId}`);
    await channel.send({
      type: 'broadcast',
      event: 'typing',
      payload: { user_id: userId, is_typing: isTypingNow },
    });
  }, [roomId, userId]);

  const addReaction = async (messageId: string, emoji: string) => {
    const msg = messages.find(m => m.id === messageId);
    if (!msg) return;
    const reactions = { ...msg.reactions };
    if (!reactions[emoji]) reactions[emoji] = [];
    if (reactions[emoji].includes(userId)) {
      reactions[emoji] = reactions[emoji].filter(id => id !== userId);
    } else {
      reactions[emoji].push(userId);
    }
    await supabase.from('messages').update({ reactions }).eq('id', messageId);
    setMessages(prev => prev.map(m => m.id === messageId ? { ...m, reactions } : m));
  };

  return { room, messages, members, isTyping, loading, sendMessage, sendTyping, addReaction };
}
