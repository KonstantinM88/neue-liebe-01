'use client'

import { useLang } from '@/context/LanguageContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>Neue Liebe</div>
          <p>{t('Restaurant · Terrasse · Tanz & Events in Nebra (Unstrut), Sachsen-Anhalt', 'Restaurant · Terrace · Dance & Events in Nebra (Unstrut), Saxony-Anhalt')}</p>
          <div className={styles.social}>
            {['f', 'IG', 'WA', 'TA'].map(s => (
              <a key={s} href="#" className={styles.socialBtn} aria-label={s}>{s}</a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h5>{t('Navigation', 'Navigation')}</h5>
          <ul>
            {[
              ['#about',       t('Über uns',    'About')],
              ['#experience',  t('Erlebnisse',  'Experiences')],
              ['#menu',        t('Speisekarte', 'Menu')],
              ['#gallery',     t('Galerie',     'Gallery')],
              ['#events',      'Events'],
            ].map(([href, label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h5>{t('Kontakt', 'Contact')}</h5>
          <p>
            Wetzendorfer Str. 10<br />
            06642 Nebra (Unstrut)<br /><br />
            <a href="tel:034461599804">034461 599804</a>
          </p>
        </div>

        <div className={styles.col}>
          <h5>{t('Öffnungszeiten', 'Hours')}</h5>
          <p>{t('Täglich geöffnet', 'Open daily')}<br />{t('bis 23:00 Uhr', 'until 23:00')}</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Restaurant Neue Liebe · Nebra (Unstrut)</p>
        <p>{t('Impressum · Datenschutz', 'Imprint · Privacy')}</p>
      </div>
    </footer>
  )
}
