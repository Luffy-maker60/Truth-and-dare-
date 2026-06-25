import type { Question, GameMode, QuestionCategory } from '@/types'

export const questions: Question[] = [
  // === TRUTH & DARE - CUTE ===
  { id: 'td-c-1', category: 'cute', game_mode: 'truth-dare', is_dare: false,
    text_en: 'What was your first impression of me?',
    text_hi: 'मुझसे पहली मुलाकात में तुम्हारा क्या impression था?',
    text_or: 'Mote prathame dekhile tumara ki lagnana heithila?' },
  { id: 'td-c-2', category: 'cute', game_mode: 'truth-dare', is_dare: false,
    text_en: 'Which memory of us makes you smile the most?',
    text_hi: 'हमारी कौन सी यादें तुम्हें सबसे ज़्यादा मुस्कुराती है?',
    text_or: 'Amara kebe kahara smarana tumaku besi hasaia dei?' },
  { id: 'td-c-3', category: 'cute', game_mode: 'truth-dare', is_dare: false,
    text_en: 'What is your favorite nickname you\'ve given me?',
    text_hi: 'तुमने मुझे जो nickname दिया है, वो कौन सा है तुम्हें सबसे पसंद?',
    text_or: 'Tume mote je nickname dei cha, taha madhyaru kaunti tuma pria?' },
  { id: 'td-d-1', category: 'cute', game_mode: 'truth-dare', is_dare: true,
    text_en: 'Send me a voice note saying something sweet in your language.',
    text_hi: 'मुझे अपनी भाषा में कुछ मीठा कहते हुए voice note भेजो।',
    text_or: 'Mote nijara bhashare kichi mitha kahile voice note pathao.' },

  // === DEEP QUESTIONS - ROMANTIC ===
  { id: 'dq-r-1', category: 'romantic', game_mode: 'deep-questions', is_dare: false,
    text_en: 'What makes you feel closest to me?',
    text_hi: 'कौन सी चीज़ तुम्हें मेरे सबसे करीब महसूस कराती है?',
    text_or: 'Kaunsi jinisa tumaku mote sabase niku anubhaba karaia?' },
  { id: 'dq-r-2', category: 'romantic', game_mode: 'deep-questions', is_dare: false,
    text_en: 'What is your favorite thing about our relationship?',
    text_hi: 'हमारे रिश्ते की कौन सी बात तुम्हें सबसे ज़्यादा पसंद है?',
    text_or: 'Amara sambandha madhyaru tuma sabutharu pria jinisa kana?' },
  { id: 'dq-r-3', category: 'romantic', game_mode: 'deep-questions', is_dare: false,
    text_en: 'Which date would you love us to go on together?',
    text_hi: 'तुम हम दोनों के साथ कौन सी date पर जाना चाहोगे?',
    text_or: 'Ame dujane milikara kein date tae jaite chaiba?' },
  { id: 'dq-r-4', category: 'romantic', game_mode: 'deep-questions', is_dare: false,
    text_en: 'When do you feel most loved by me?',
    text_hi: 'तुम्हें कब लगता है कि मैं तुमसे सबसे ज़्यादा प्यार करता/करती हूं?',
    text_or: 'Tume kabebela anubhaba kara je mu tumaku sabase besi bhala paua?' },

  // === FLIRTY CARDS ===
  { id: 'fc-f-1', category: 'flirty', game_mode: 'flirty-cards', is_dare: false,
    text_en: 'What outfit would you love to see me wear?',
    text_hi: 'तुम मुझे कौन सा outfit पहने देखना पसंद करोगे/करोगी?',
    text_or: 'Tume mote kaunsi outfit phinhe dekhite chaiba?' },
  { id: 'fc-f-2', category: 'flirty', game_mode: 'flirty-cards', is_dare: false,
    text_en: 'What is one compliment you\'ve always wanted to hear from me?',
    text_hi: 'एक compliment जो तुम हमेशा मुझसे सुनना चाहते/चाहती हो?',
    text_or: 'Ekta compliment je tume sadabesha mota tharu shunite chauthila?' },
  { id: 'fc-f-3', category: 'flirty', game_mode: 'flirty-cards', is_dare: false,
    text_en: 'What do you find most attractive about me?',
    text_hi: 'मुझमें तुम्हें सबसे आकर्षक क्या लगता है?',
    text_or: 'Mote tume sabutharu attractive kana mane kara?' },
  { id: 'fc-f-4', category: 'flirty', game_mode: 'flirty-cards', is_dare: false,
    text_en: 'What romantic surprise would make you happiest?',
    text_hi: 'कौन सा romantic surprise तुम्हें सबसे खुश करेगा/करेगी?',
    text_or: 'Kaunsi romantic surprise tumaku sabase khushi kariba?' },
  { id: 'fc-f-5', category: 'flirty', game_mode: 'flirty-cards', is_dare: false,
    text_en: 'If I could be there right now, what would you want us to do?',
    text_hi: 'अगर मैं अभी वहां होता/होती, तो तुम क्या करना चाहते/चाहती?',
    text_or: 'Jadi mu ebehi sethare thanta, tume ame kana karante chauba?' },

  // === DEEP EMOTIONAL ===
  { id: 'de-1', category: 'deep', game_mode: 'deep-questions', is_dare: false,
    text_en: 'What is your biggest fear in relationships?',
    text_hi: 'रिश्तों में तुम्हारा सबसे बड़ा डर क्या है?',
    text_or: 'Sambandha madhyare tumara sabutharu boro bhaya kana?' },
  { id: 'de-2', category: 'deep', game_mode: 'deep-questions', is_dare: false,
    text_en: 'What makes you feel truly loved?',
    text_hi: 'कौन सी चीज़ तुम्हें सच में प्यार महसूस कराती है?',
    text_or: 'Kaunsi jinisa tumaku sachare bhala paua anubhaba karaia?' },
  { id: 'de-3', category: 'deep', game_mode: 'deep-questions', is_dare: false,
    text_en: 'When do you miss me the most?',
    text_hi: 'तुम मुझे सबसे ज़्यादा कब miss करते/करती हो?',
    text_or: 'Tume mote sabutharu besi kabebeye miss kara?' },
  { id: 'de-4', category: 'deep', game_mode: 'deep-questions', is_dare: false,
    text_en: 'What dream do you want us to achieve together?',
    text_hi: 'कौन सा सपना तुम हम दोनों मिलकर पूरा करना चाहते/चाहती हो?',
    text_or: 'Kaunsi swapna tume ame dujane milika purna karibaku chao?' },
  { id: 'de-5', category: 'deep', game_mode: 'deep-questions', is_dare: false,
    text_en: 'Aji mote kete miss karucha?',
    text_hi: 'आज तुम मुझे कितना miss कर रहे/रही हो?',
    text_or: 'Aji mote kete miss karucha?' },
  { id: 'de-6', category: 'deep', game_mode: 'deep-questions', is_dare: false,
    text_en: 'Mo katha bhabi kete hasa asuchi?',
    text_hi: 'मेरे बारे में सोचकर कितनी मुस्कान आती है?',
    text_or: 'Mo katha bhabi kete hasa asuchi?' },

  // === COUPLE CHALLENGES ===
  { id: 'cc-1', category: 'challenge', game_mode: 'daily-challenge', is_dare: true,
    text_en: 'Send a voice note describing your favorite memory together.',
    text_hi: 'एक voice note भेजो जिसमें तुम हमारी favorite memory describe करो।',
    text_or: 'Ekta voice note pathao jethare tume amara priya smarana describe kara.' },
  { id: 'cc-2', category: 'challenge', game_mode: 'daily-challenge', is_dare: true,
    text_en: 'Share a photo that reminds you of your partner.',
    text_hi: 'एक photo share करो जो तुम्हें अपने partner की याद दिलाए।',
    text_or: 'Ekta photo share kara je tumaku tumara partner ku mone padeia dei.' },
  { id: 'cc-3', category: 'challenge', game_mode: 'daily-challenge', is_dare: true,
    text_en: 'Give your partner three genuine compliments right now.',
    text_hi: 'अभी अपने partner को तीन genuine compliments दो।',
    text_or: 'Ebehi tumara partner ku tini genuine compliment deo.' },
  { id: 'cc-4', category: 'challenge', game_mode: 'daily-challenge', is_dare: true,
    text_en: 'Write a short poem or message about what you love most about them.',
    text_hi: 'एक छोटी सी poem या message लिखो जो उनके बारे में तुम्हारी सबसे पसंदीदा बात हो।',
    text_or: 'Ekta chhota poem ba message likha tanka sambandha re tumara sabutharu pria jinisa niyam.' },

  // === LOVE LANGUAGE DISCOVERY ===
  { id: 'll-1', category: 'deep', game_mode: 'love-language', is_dare: false,
    text_en: 'Do you feel most loved through words, touch, quality time, gifts, or acts of service?',
    text_hi: 'तुम्हें किसमें सबसे ज़्यादा प्यार महसूस होता है - words, touch, time, gifts या सेवा?',
    text_or: 'Tume sabutharu bhala paua anubhaba kara kana madhyare - words, touch, time, gifts ba seva?' },
  { id: 'll-2', category: 'deep', game_mode: 'love-language', is_dare: false,
    text_en: 'What small thing do I do that makes you feel the most appreciated?',
    text_hi: 'मैं कौन सी छोटी चीज़ करता/करती हूं जो तुम्हें सबसे ज़्यादा appreciate feel कराती है?',
    text_or: 'Mu kaunsi chhota jinisa kari je tumaku sabase besi appreciate feel karaia?' },
  { id: 'll-3', category: 'deep', game_mode: 'love-language', is_dare: false,
    text_en: 'Kemiti laguchi aji? Tame thile bhalua lagunta.',
    text_hi: 'आज कैसा लग रहा है? तुम होते तो अच्छा लगता।',
    text_or: 'Kemiti laguchi aji? Tame thile bhalua lagunta.' },

  // === FUTURE TOGETHER ===
  { id: 'ft-1', category: 'romantic', game_mode: 'future-planning', is_dare: false,
    text_en: 'Where do you picture us living in 5 years?',
    text_hi: '5 साल में तुम हमें कहां रहते देखते हो?',
    text_or: '5 barsha pare tume amaku keuthi rahibara imagine kara?' },
  { id: 'ft-2', category: 'romantic', game_mode: 'future-planning', is_dare: false,
    text_en: 'What is one adventure you want us to go on together?',
    text_hi: 'कौन सी एक adventure तुम हम दोनों मिलकर करना चाहते हो?',
    text_or: 'Kaunsi ekta adventure tume ame dujane milika karibaku chao?' },
  { id: 'ft-3', category: 'romantic', game_mode: 'future-planning', is_dare: false,
    text_en: 'What traditions do you want us to build as a couple?',
    text_hi: 'एक couple के रूप में तुम हमारे लिए कौन सी traditions बनाना चाहते हो?',
    text_or: 'Ekta couple rupe tume amara paia kaunsi traditions banibaku chao?' },
  { id: 'ft-4', category: 'cute', game_mode: 'future-planning', is_dare: false,
    text_en: 'Tame kn khaicha? Aji ki khaba plan kari cha?',
    text_hi: 'तुमने क्या खाया? आज क्या खाने का plan है?',
    text_or: 'Tame kn khaicha? Aji ki khaba plan kari cha?' },

  // === COUPLE QUIZ ===
  { id: 'cq-1', category: 'cute', game_mode: 'couple-quiz', is_dare: false,
    text_en: 'What is my favorite food?',
    text_hi: 'मेरा favorite food क्या है?',
    text_or: 'Mora pria khana kana?' },
  { id: 'cq-2', category: 'cute', game_mode: 'couple-quiz', is_dare: false,
    text_en: 'What is my go-to comfort movie or show?',
    text_hi: 'मेरी comfort movie या show कौन सी है?',
    text_or: 'Mora comfort movie ba show kaunsi?' },
  { id: 'cq-3', category: 'romantic', game_mode: 'couple-quiz', is_dare: false,
    text_en: 'What was I wearing when we first met or talked?',
    text_hi: 'जब हम पहली बार मिले या बात की, तो मैं क्या पहना हुआ/हुई था/थी?',
    text_or: 'Ame prathame dekhila ba kathala sebe mu ki phinhe thili?' },
  { id: 'cq-4', category: 'deep', game_mode: 'couple-quiz', is_dare: false,
    text_en: 'What is my love language?',
    text_hi: 'मेरी love language क्या है?',
    text_or: 'Mora love language kana?' },
]

export function getQuestionsByGame(mode: GameMode): Question[] {
  return questions.filter(q => q.game_mode === mode)
}

export function getQuestionsByCategory(cat: QuestionCategory): Question[] {
  return questions.filter(q => q.category === cat)
}

export function getRandomQuestion(mode: GameMode, excludeIds: string[] = []): Question | null {
  const pool = questions.filter(q => q.game_mode === mode && !excludeIds.includes(q.id))
  if (!pool.length) return null
  return pool[Math.floor(Math.random() * pool.length)]
}
