export function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

export function formatTime(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export function formatDate(date: string | Date): string {
  const d = new Date(date)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  return d.toLocaleDateString([], { month: 'short', day: 'numeric' })
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export const EMOJI_REACTIONS = ['❤️', '😘', '🥰', '😍', '💕', '🫂', '✨', '🔥']

export const GAME_EMOJIS: Record<string, string> = {
  'truth-dare': '🎭',
  'deep-questions': '💭',
  'couple-quiz': '🧩',
  'daily-challenge': '🎯',
  'flirty-cards': '😘',
  'love-language': '💗',
  'future-planning': '🌟',
}

export const GAME_COLORS: Record<string, string> = {
  'truth-dare': 'from-blush-500 to-velvet-600',
  'deep-questions': 'from-velvet-500 to-blue-600',
  'couple-quiz': 'from-amber-500 to-orange-600',
  'daily-challenge': 'from-emerald-500 to-teal-600',
  'flirty-cards': 'from-pink-500 to-rose-600',
  'love-language': 'from-red-500 to-blush-600',
  'future-planning': 'from-violet-500 to-purple-600',
}
