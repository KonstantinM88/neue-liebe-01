'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLang } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import styles from './MenuSection.module.css'

type Category = 'all' | 'starter' | 'main' | 'dessert'

const dishes = [
  {
    category: 'starter' as Category,
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    de: { name: 'Saison-Salat',    tag: 'Vorspeise',    desc: 'Frische Salatblätter mit Kirschtomaten, Walnüssen und Honig-Senf-Dressing.' },
    en: { name: 'Seasonal Salad',  tag: 'Starter',      desc: 'Fresh lettuce with cherry tomatoes, walnuts and honey mustard dressing.' },
    price: '9,50 €',
  },
  {
    category: 'main' as Category,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    de: { name: 'Rinderfilet',     tag: 'Empfehlung',   desc: 'Zartes Rinderfilet mit Rotweinreduktion, Spargel und Kartoffelgratin.' },
    en: { name: 'Beef Tenderloin', tag: "Chef's Pick",  desc: 'Tender beef fillet with red wine reduction, asparagus and potato gratin.' },
    price: '28,00 €',
  },
  {
    category: 'main' as Category,
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
    de: { name: 'Gegrillter Lachs', tag: 'Hauptgericht', desc: 'Atlantischer Lachs auf Safrankartoffeln mit Beurre Blanc und frischen Kräutern.' },
    en: { name: 'Grilled Salmon',   tag: 'Main',         desc: 'Atlantic salmon on saffron potatoes with beurre blanc and fresh herbs.' },
    price: '22,00 €',
  },
  {
    category: 'main' as Category,
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    de: { name: 'Pilz-Risotto',     tag: 'Vegetarisch', desc: 'Cremiges Risotto mit wilden Waldpilzen, Parmesan und weißem Trüffelöl.' },
    en: { name: 'Mushroom Risotto', tag: 'Vegetarian',  desc: 'Creamy risotto with wild forest mushrooms, parmesan and white truffle oil.' },
    price: '18,50 €',
  },
  {
    category: 'main' as Category,
    img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80',
    de: { name: 'Wiener Schnitzel', tag: 'Klassiker', desc: 'Hausgemachtes Kalbsschnitzel mit Kartoffelsalat und frischer Zitrone.' },
    en: { name: 'Wiener Schnitzel', tag: 'Classic',   desc: 'Homemade veal schnitzel with potato salad and fresh lemon.' },
    price: '23,00 €',
  },
  {
    category: 'dessert' as Category,
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
    de: { name: 'Schokoladen-Fondant', tag: 'Dessert', desc: 'Warmer Schokoladenkuchen mit flüssigem Kern, Vanilleeis und Himbeeren.' },
    en: { name: 'Chocolate Fondant',   tag: 'Dessert', desc: 'Warm chocolate cake with liquid center, vanilla ice cream and raspberries.' },
    price: '9,00 €',
  },
]

export default function MenuSection() {
  const { t } = useLang()
  const [active, setActive] = useState<Category>('all')
  const header = useReveal()

  const filtered = active === 'all' ? dishes : dishes.filter(d => d.category === active)

  const filters: { key: Category; de: string; en: string }[] = [
    { key: 'all',     de: 'Alle',          en: 'All'         },
    { key: 'starter', de: 'Vorspeisen',    en: 'Starters'    },
    { key: 'main',    de: 'Hauptgerichte', en: 'Main Courses'},
    { key: 'dessert', de: 'Desserts',      en: 'Desserts'    },
  ]

  return (
    <section id="menu" className={styles.section}>
      <div
        ref={header.ref}
        className={`section-header-center reveal ${header.visible ? 'visible' : ''}`}
      >
        <p className="section-label" style={{ color: 'var(--gold-dark)' }}>
          {t('Unsere Küche', 'Our Cuisine')}
        </p>
        <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--charcoal)' }}>
          {t('Signature Gerichte', 'Signature Dishes')}
        </h2>
        <p style={{ color: 'var(--brown-light)' }}>
          {t('Frische, regionale Zutaten – täglich mit Leidenschaft zubereitet.', 'Fresh, regional ingredients – prepared daily with passion.')}
        </p>
      </div>

      <div className={styles.filterRow}>
        {filters.map(f => (
          <button
            key={f.key}
            className={`${styles.filterBtn} ${active === f.key ? styles.filterActive : ''}`}
            onClick={() => setActive(f.key)}
          >
            {t(f.de, f.en)}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((dish, i) => (
          <DishCard key={dish.de.name} dish={dish} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}

function DishCard({ dish, delay }: { dish: typeof dishes[0]; delay: number }) {
  const { t } = useLang()
  const r = useReveal()
  return (
    <div
      ref={r.ref}
      className={`reveal ${r.visible ? 'visible' : ''} ${styles.card}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.imgWrap}>
        <Image src={dish.img} alt={dish.de.name} width={400} height={300} className={styles.img} />
        <span className={styles.tag}>{t(dish.de.tag, dish.en.tag)}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{t(dish.de.name, dish.en.name)}</div>
        <div className={styles.desc}>{t(dish.de.desc, dish.en.desc)}</div>
        <div className={styles.footer}>
          <span className={styles.price}>{dish.price}</span>
          <button className={styles.add} aria-label="Add">+</button>
        </div>
      </div>
    </div>
  )
}
