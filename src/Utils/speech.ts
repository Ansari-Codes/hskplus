// Speech synthesis utility for Mandarin Chinese (zh-CN)

export function speakChinese(text: string, rate: number = 0.85): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve()
      return
    }

    window.speechSynthesis.cancel()

    const cleanText = text.replace(/[\(\)（）……\.\?!,\s]/g, ' ').trim()
    if (!cleanText) {
      resolve()
      return
    }

    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = 'zh-CN'
    utterance.rate = rate

    const voices = window.speechSynthesis.getVoices()
    const zhVoice = voices.find((v) => v.lang.startsWith('zh') || v.lang.includes('cmn'))
    if (zhVoice) {
      utterance.voice = zhVoice
    }

    utterance.onend = () => resolve()
    utterance.onerror = () => resolve()

    window.speechSynthesis.speak(utterance)
  })
}

export function stopSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
}

export const playChineseSpeech = speakChinese
