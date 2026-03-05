'use client'

import { useEffect, useRef } from 'react'
import { useLang } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import styles from './ParallaxQuote.module.css'

export default function ParallaxQuote() {
  const { t } = useLang()
  const bgRef = useRef<HTMLDivElement>(null)
  const r = useReveal()

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return
      const rect = bgRef.current.parentElement!.getBoundingClientRect()
      bgRef.current.style.transform = `translateY(${rect.top * 0.35}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles.wrapper}>
      <div ref={bgRef} className={styles.bg} />
      <div className={styles.overlay} />
      <div ref={r.ref} className={`reveal ${r.visible ? 'visible' : ''} ${styles.content}`}>
        <p className={styles.quote}>
          {t(
            '„Essen ist nicht nur Nahrung – es ist Erinnerung, Wärme und Verbindung."',
            '"Food is not just nourishment – it is memory, warmth and connection."'
          )}
        </p>
        <p className={styles.author}>— Neue Liebe, Nebra (Unstrut)</p>
      </div>
    </div>
  )
}
