'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'
import styles from './Navigation.module.css'

export default function Navigation() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 968) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navLinks = [
    { href: '#about',       de: 'Über uns',    en: 'About'       },
    { href: '#experience',  de: 'Erlebnisse',  en: 'Experiences' },
    { href: '#menu',        de: 'Speisekarte', en: 'Menu'        },
    { href: '#gallery',     de: 'Galerie',     en: 'Gallery'     },
    { href: '#events',      de: 'Events',      en: 'Events'      },
    { href: '#contact',     de: 'Kontakt',     en: 'Contact'     },
  ]

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Link href="#hero" className={styles.logo} onClick={() => setMenuOpen(false)}>
          Neue Liebe
          <span>Restaurant • Nebra (Unstrut)</span>
        </Link>

        <ul className={styles.links}>
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href}>{t(l.de, l.en)}</a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <div className={styles.langSwitch}>
            <button
              className={`${styles.langBtn} ${lang === 'de' ? styles.active : ''}`}
              onClick={() => setLang('de')}
            >DE</button>
            <span className={styles.sep}>|</span>
            <button
              className={`${styles.langBtn} ${lang === 'en' ? styles.active : ''}`}
              onClick={() => setLang('en')}
            >EN</button>
          </div>
          <a href="#reservation" className={styles.cta}>
            {t('Reservieren', 'Reserve')}
          </a>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {t(l.de, l.en)}
          </a>
        ))}
        <a href="#reservation" onClick={() => setMenuOpen(false)} className={styles.mobileCta}>
          {t('Reservieren', 'Reserve')}
        </a>
        <div className={styles.mobileLangSwitch}>
          <button
            className={`${styles.langBtn} ${lang === 'de' ? styles.active : ''}`}
            onClick={() => setLang('de')}
          >
            DE
          </button>
          <span className={styles.sep}>|</span>
          <button
            className={`${styles.langBtn} ${lang === 'en' ? styles.active : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </div>
    </>
  )
}
