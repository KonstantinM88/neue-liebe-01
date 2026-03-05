'use client'

import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import styles from './Experience.module.css'

const cards = [
  {
    num: '01',
    de: { title: 'Sommterrasse', desc: 'Genießen Sie laue Abende unter dem Sternenhimmel auf unserer romantischen Terrasse mit Blick ins Grüne.' },
    en: { title: 'Summer Terrace', desc: 'Enjoy balmy evenings under starlit skies on our romantic terrace with views of lush greenery.' },
    img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80',
  },
  {
    num: '02',
    de: { title: 'Bankettsaal', desc: 'Unser eleganter Bankettsaal bietet den perfekten Rahmen für Hochzeiten, Firmenfeiern und besondere Anlässe.' },
    en: { title: 'Banquet Hall', desc: 'Our elegant banquet hall provides the perfect setting for weddings, corporate events and special occasions.' },
    img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
  },
  {
    num: '03',
    de: { title: 'Tanz & Events', desc: 'Live-Musik, Themenabende und unvergessliche Tanzveranstaltungen – bei uns ist immer etwas los.' },
    en: { title: 'Dance & Events', desc: 'Live music, themed evenings and unforgettable dance events – there is always something happening here.' },
    img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80',
  },
]

export default function Experience() {
  const { t } = useLang()
  const header = useReveal()

  return (
    <section id="experience" className={styles.section}>
      <div
        ref={header.ref}
        className={`section-header-center reveal ${header.visible ? 'visible' : ''}`}
      >
        <p className="section-label" style={{ color: 'var(--gold)' }}>
          {t('Unsere Welten', 'Our Worlds')}
        </p>
        <h2 className="section-title" style={{ color: 'var(--white)', fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
          {t('Drei einzigartige Erlebnisse', 'Three Unique Experiences')}
        </h2>
      </div>

      <div className={styles.grid}>
        {cards.map((c, i) => (
          <ExpCard key={c.num} card={c} delay={i * 0.15} />
        ))}
      </div>
    </section>
  )
}

function ExpCard({ card, delay }: { card: typeof cards[0]; delay: number }) {
  const { t } = useLang()
  const r = useReveal()
  return (
    <div
      ref={r.ref}
      className={`reveal ${r.visible ? 'visible' : ''} ${styles.card}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <Image src={card.img} alt={card.de.title} width={600} height={800} className={styles.img} />
      <div className={styles.overlay}>
        <div className={styles.num}>{card.num}</div>
        <div className={styles.line} />
        <div className={styles.cardTitle}>{t(card.de.title, card.en.title)}</div>
        <p className={styles.desc}>{t(card.de.desc, card.en.desc)}</p>
      </div>
    </div>
  )
}
