'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'de' | 'en'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (de: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'de',
  setLang: () => {},
  t: (de) => de,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('de')
  const t = (de: string, en: string) => (lang === 'de' ? de : en)
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
