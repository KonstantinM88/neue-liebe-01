'use client'

import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.overlayBottom} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>{t('Willkommen in', 'Welcome to')}</p>
        <h1 className={styles.title}>
          Neue<em>Liebe</em>
        </h1>
        <p className={styles.subtitle}>
          Restaurant&nbsp;•&nbsp;Terrasse&nbsp;•&nbsp;Tanz &amp; Events
        </p>
        <div className={styles.divider} />
        <div className={styles.btns}>
          <Link href="#reservation" className="btn-primary">
            {t('Tisch reservieren', 'Reserve a Table')}
          </Link>
          <Link href="#menu" className="btn-outline">
            {t('Speisekarte ansehen', 'View Menu')}
          </Link>
        </div>
      </div>

      <div className={styles.scroll}>
        <span>{t('Entdecken', 'Discover')}</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
