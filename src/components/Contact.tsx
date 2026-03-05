'use client'

import { useLang } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useLang()
  const left  = useReveal()
  const right = useReveal()

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div ref={left.ref} className={`reveal-left ${left.visible ? 'visible' : ''} ${styles.info}`}>
          <p className={`section-label ${styles.label}`}>
            {t('So finden Sie uns', 'Find Us')}
          </p>
          <h2 className={`section-title ${styles.title}`}>
            {t('Besuchen Sie', 'Visit')}<br />{t('die Neue Liebe', 'Neue Liebe')}
          </h2>
          <span className="gold-line" />

          {[
            {
              icon: '📍',
              title: t('Adresse', 'Address'),
              content: (<>Wetzendorfer Str. 10<br/>06642 Nebra (Unstrut)<br/>Deutschland</>),
            },
            {
              icon: '📞',
              title: t('Telefon', 'Phone'),
              content: (<a href="tel:034461599804">034461 599804</a>),
            },
            {
              icon: '🕐',
              title: t('Öffnungszeiten', 'Opening Hours'),
              content: (<>{t('Täglich geöffnet', 'Open daily')}<br/>{t('Schließt um 23:00 Uhr', 'Closes at 23:00')}</>),
            },
            {
              icon: '💶',
              title: t('Durchschnittspreis', 'Average Price'),
              content: (<>20–30 € {t('pro Person', 'per person')}</>),
            },
          ].map(item => (
            <div key={item.title} className={styles.item}>
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.itemText}>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={right.ref} className={`reveal-right ${right.visible ? 'visible' : ''} ${styles.map}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.8!2d11.8365!3d51.3505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a681b0b3abcdef%3A0x123456789abcdef!2sWetzendorfer+Str.+10%2C+06642+Nebra+(Unstrut)!5e0!3m2!1sde!2sde!4v1234567890"
            allowFullScreen
            loading="lazy"
            title="Neue Liebe Standort"
          />
        </div>
      </div>
    </section>
  )
}
