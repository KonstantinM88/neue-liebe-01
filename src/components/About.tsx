'use client'

import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import styles from './About.module.css'

export default function About() {
  const { t } = useLang()
  const left  = useReveal()
  const right = useReveal()

  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>
        <div
          ref={left.ref}
          className={`reveal-left ${left.visible ? 'visible' : ''} ${styles.text}`}
        >
          <p className={`section-label ${styles.label}`}>
            {t('Unsere Geschichte', 'Our Story')}
          </p>
          <h2 className={`section-title ${styles.title}`}>
            {t('Wo jede', 'Where every')}<br />
            <em>{t('Mahlzeit', 'Meal')}</em><br />
            {t('eine Geschichte erzählt', 'tells a Story')}
          </h2>
          <span className="gold-line" />
          <p className={styles.body}>
            {t(
              'Im Herzen von Nebra (Unstrut) gelegen, ist die Neue Liebe mehr als ein Restaurant – es ist ein Ort, an dem Leidenschaft, Genuss und Herzlichkeit zusammenkommen. Unsere Küche vereint regionale Aromen mit modernen kulinarischen Akzenten.',
              'Located in the heart of Nebra (Unstrut), Neue Liebe is more than a restaurant – it is a place where passion, pleasure and warmth come together. Our cuisine unites regional flavors with modern culinary accents.'
            )}
          </p>
          <p className={styles.body}>
            {t(
              'Ob ein romantisches Abendessen zu zweit, ein festliches Familienfest oder ein unvergesslicher Abend auf unserer Sommeterrasse – bei uns werden Momente zu Erinnerungen.',
              'Whether a romantic dinner for two, a festive family celebration, or an unforgettable evening on our summer terrace – with us, moments become memories.'
            )}
          </p>
          <div className={styles.stats}>
            {[
              { num: '15+', label: t('Jahre Erfahrung', 'Years Experience') },
              { num: '200+', label: t('Sitzplätze', 'Seats') },
              { num: '4.8', label: t('Google Bewertung', 'Google Rating') },
              { num: '∞', label: t('Leidenschaft', 'Passion') },
            ].map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={right.ref}
          className={`reveal-right ${right.visible ? 'visible' : ''} ${styles.visual}`}
        >
          <Image
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=85"
            alt="Restaurant Neue Liebe Interieur"
            width={800}
            height={1000}
            className={styles.imgMain}
          />
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=85"
            alt="Kulinarische Erlebnisse"
            width={400}
            height={400}
            className={styles.imgFloat}
          />
          <div className={styles.badge}>
            <span className={styles.badgeNum}>★</span>
            <span className={styles.badgeLbl}>Premium</span>
          </div>
        </div>
      </div>
    </section>
  )
}
