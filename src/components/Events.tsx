'use client'

import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import styles from './Events.module.css'

const eventCards = [
  { img: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=800&q=80', de: 'Hochzeiten',             en: 'Weddings' },
  { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', de: 'Firmenveranstaltungen', en: 'Corporate Events' },
  { img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80', de: 'Tanz & Musik',          en: 'Dance & Music' },
]

const features = [
  { icon: '💒', de: { title: 'Hochzeiten',      desc: 'Unvergessliche Momente für das schönste Fest Ihres Lebens.' }, en: { title: 'Weddings',        desc: 'Unforgettable moments for the most beautiful celebration of your life.' } },
  { icon: '🥂', de: { title: 'Firmenfeiern',    desc: 'Professionelle Atmosphäre mit kulinarischem Genuss.'        }, en: { title: 'Corporate Events', desc: 'Professional atmosphere with culinary excellence.'                       } },
  { icon: '🎶', de: { title: 'Tanzabende',      desc: 'Live-Musik und Tanzfläche für magische Abende.'             }, en: { title: 'Dance Evenings',   desc: 'Live music and dance floor for magical evenings.'                      } },
]

export default function Events() {
  const { t } = useLang()
  const left  = useReveal()
  const right = useReveal()
  const grid  = useReveal()

  return (
    <section id="events" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div ref={left.ref} className={`reveal-left ${left.visible ? 'visible' : ''} ${styles.text}`}>
            <p className={`section-label ${styles.label}`}>
              {t('Feiern & Feste', 'Celebrations')}
            </p>
            <h2 className={`section-title ${styles.title}`}>
              {t('Ihre Feier –', 'Your Celebration –')}<br />
              <em>{t('unser Herzstück', 'our passion')}</em>
            </h2>
            <span className="gold-line" />
            <p className={styles.body}>
              {t(
                'Von der intimen Geburtstagsfeier bis zur großen Hochzeit – wir verwandeln Ihre Wünsche in unvergessliche Momente. Unser erfahrenes Team kümmert sich um jedes Detail.',
                'From the intimate birthday celebration to the grand wedding – we transform your wishes into unforgettable moments. Our experienced team takes care of every detail.'
              )}
            </p>
            <div className={styles.features}>
              {features.map(f => (
                <div key={f.icon} className={styles.feat}>
                  <div className={styles.featIcon}>{f.icon}</div>
                  <div>
                    <h4>{t(f.de.title, f.en.title)}</h4>
                    <p>{t(f.de.desc, f.en.desc)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={right.ref} className={`reveal-right ${right.visible ? 'visible' : ''} ${styles.visual}`}>
            <Image
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80"
              alt="Events Neue Liebe"
              width={600}
              height={750}
              className={styles.img}
            />
            <div className={styles.box}>
              <span className={styles.boxNum}>200+</span>
              <span className={styles.boxLbl}>{t('Erfolgreiche Events', 'Successful Events')}</span>
            </div>
          </div>
        </div>

        <div ref={grid.ref} className={`reveal ${grid.visible ? 'visible' : ''} ${styles.evGrid}`}>
          {eventCards.map(c => (
            <div key={c.de} className={styles.evCard}>
              <Image src={c.img} alt={c.de} width={500} height={330} className={styles.evImg} />
              <div className={styles.evOverlay}>
                <span className={styles.evTitle}>{t(c.de, c.en)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
