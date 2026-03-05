'use client'

import { useLang } from '@/context/LanguageContext'
import styles from './InfoBar.module.css'

export default function InfoBar() {
  const { t } = useLang()
  return (
    <div className={styles.bar}>
      <div className={styles.item}>
        <span>📍</span>
        <span>Wetzendorfer Str. 10, 06642 Nebra (Unstrut)</span>
      </div>
      <div className={styles.item}>
        <span>📞</span>
        <a href="tel:034461599804">034461 599804</a>
      </div>
      <div className={styles.item}>
        <span>🕐</span>
        <span>{t('Täglich geöffnet · Schließt 23:00', 'Open Daily · Closes 23:00')}</span>
      </div>
      <div className={styles.item}>
        <span>💶</span>
        <span>20–30 € {t('p. P.', 'p.p.')}</span>
      </div>
    </div>
  )
}
