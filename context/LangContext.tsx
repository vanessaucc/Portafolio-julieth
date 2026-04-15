'use client'
import { createContext, useContext, useState } from 'react'
import { translations, type Lang } from '@/data/translations'

type TLang = typeof translations['es']

interface LangCtx {
  lang: Lang
  toggleLang: () => void
  t: TLang
}

const LangContext = createContext<LangCtx>({
  lang: 'es',
  toggleLang: () => {},
  t: translations.es,
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const toggleLang = () => setLang(l => l === 'es' ? 'en' : 'es')
  return (
    <LangContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() { return useContext(LangContext) }
