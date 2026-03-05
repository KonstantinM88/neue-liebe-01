'use client'

import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import styles from './Gallery.module.css'

const imgs = [
  { src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&q=80', alt: 'Restaurant Interieur', cls: styles.g1 },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80', alt: 'Gourmet Speisen',      cls: styles.g2 },
  { src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=700&q=80', alt: 'Terrasse',            cls: styles.g3 },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80', alt: 'Kulinarik',           cls: styles.g4 },
  { src: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=700&q=80', alt: 'Event',               cls: styles.g5 },
  { src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=700&q=80', alt: 'Dessert',             cls: styles.g6 },
]

export default function Gallery() {
  const { t } = useLang()
  const header = useReveal()

  return (
    <section id="gallery" className={styles.section}>
      <div
        ref={header.ref}
        className={`section-header-center reveal ${header.visible ? 'visible' : ''}`}
        style={{ marginBottom: '3rem' }}
      >
        <p className="section-label" style={{ color: 'var(--gold)' }}>
          {t('Einblicke', 'Gallery')}
        </p>
        <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', color: 'var(--white)' }}>
          {t('Die Neue Liebe in Bildern', 'Neue Liebe in Pictures')}
        </h2>
      </div>
      <div className={styles.grid}>
        {imgs.map((img, i) => (
          <GalleryItem key={img.alt} img={img} delay={i * 0.08} />
        ))}
      </div>
    </section>
  )
}

function GalleryItem({ img, delay }: { img: typeof imgs[0]; delay: number }) {
  const r = useReveal()
  return (
    <div
      ref={r.ref}
      className={`reveal ${r.visible ? 'visible' : ''} ${styles.item} ${img.cls}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <Image src={img.src} alt={img.alt} fill className={styles.img} sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" />
    </div>
  )
}
