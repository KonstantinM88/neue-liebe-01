// src/components/Navigation.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'
import styles from './Navigation.module.css'

export default function Navigation() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const close = () => setMenuOpen(false)

  const navLinks = [
    { href: '#about',      de: 'Über uns',    en: 'About'       },
    { href: '#experience', de: 'Erlebnisse',  en: 'Experiences' },
    { href: '#menu',       de: 'Speisekarte', en: 'Menu'        },
    { href: '#gallery',    de: 'Galerie',     en: 'Gallery'     },
    { href: '#events',     de: 'Events',      en: 'Events'      },
    { href: '#contact',    de: 'Kontakt',     en: 'Contact'     },
  ]

  return (
    <>
      {/* ══ NAV BAR ══ */}
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>

        {/* Logo — always left */}
        <Link href="#hero" onClick={close} className={styles.logo}>
          <span className={styles.logoMain}>Neue Liebe</span>
          <span className={styles.logoSub}>Restaurant · Nebra (Unstrut)</span>
        </Link>

        {/* Desktop: center nav links (hidden on mobile) */}
        <ul className={styles.desktopLinks}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className={styles.desktopLink}>
                {t(link.de, link.en)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop: lang + CTA (hidden on mobile) */}
        <div className={styles.desktopRight}>
          <div className={styles.langRow}>
            <button
              className={`${styles.langBtn} ${lang === 'de' ? styles.langActive : ''}`}
              onClick={() => setLang('de')}
            >DE</button>
            <span className={styles.langSep}>|</span>
            <button
              className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
              onClick={() => setLang('en')}
            >EN</button>
          </div>
          <a href="#reservation" className={styles.cta}>
            {t('Reservieren', 'Reserve')}
          </a>
        </div>

        {/* Mobile: lang + hamburger (hidden on desktop) */}
        <div className={styles.mobileRight}>
          <div className={styles.langRow}>
            <button
              className={`${styles.langBtn} ${lang === 'de' ? styles.langActive : ''}`}
              onClick={() => setLang('de')}
            >DE</button>
            <span className={styles.langSep}>|</span>
            <button
              className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
              onClick={() => setLang('en')}
            >EN</button>
          </div>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className={styles.burgerIcon} aria-hidden>
                <path d="M6 6L18 18M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className={styles.burgerIcon} aria-hidden>
                <path d="M4 7H20M4 12H20M4 17H20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

      </nav>

      {/* ══ MOBILE OVERLAY ══ */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
      >
        {/* top bar */}
        <div className={styles.overlayTop}>
          <span className={styles.overlayLogo}>Neue Liebe</span>
          <button onClick={close} aria-label="Schließen" className={styles.closeBtn}>
            <svg viewBox="0 0 24 24" className={styles.closeIcon} aria-hidden>
              <path d="M6 6L18 18M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* nav links */}
        <div className={styles.overlayBody}>
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className={styles.overlayLink}
              style={{ transitionDelay: menuOpen ? `${i * 35}ms` : '0ms' }}
            >
              {t(link.de, link.en)}
            </a>
          ))}

          <div className={styles.overlayDivider} />

          <a
            href="#reservation"
            onClick={close}
            className={styles.overlayCta}
            style={{ transitionDelay: menuOpen ? `${navLinks.length * 35 + 35}ms` : '0ms' }}
          >
            {t('Reservieren', 'Reserve')}
          </a>

          {/* Lang inside overlay */}
          <div className={styles.overlayLangRow}>
            <button
              className={`${styles.overlayLangBtn} ${lang === 'de' ? styles.langActive : ''}`}
              onClick={() => setLang('de')}
            >DE</button>
            <span className={styles.langSep}>|</span>
            <button
              className={`${styles.overlayLangBtn} ${lang === 'en' ? styles.langActive : ''}`}
              onClick={() => setLang('en')}
            >EN</button>
          </div>
        </div>

        {/* address footer */}
        <div className={styles.overlayFooter}>
          <p className={styles.overlayAddr}>Wetzendorfer Str. 10 · 06642 Nebra (Unstrut)</p>
          <a href="tel:034461599804" className={styles.overlayPhone}>034461 599804</a>
        </div>
      </div>
    </>
  )
}





// 'use client'

// import { useEffect, useState } from 'react'
// import Link from 'next/link'
// import { useLang } from '@/context/LanguageContext'

// export default function Navigation() {
//   const { lang, setLang, t } = useLang()
//   const [scrolled, setScrolled] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24)
//     onScroll()
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     const previousOverflow = document.body.style.overflow
//     document.body.style.overflow = menuOpen ? 'hidden' : ''
//     return () => {
//       document.body.style.overflow = previousOverflow
//     }
//   }, [menuOpen])

//   useEffect(() => {
//     const onResize = () => {
//       if (window.innerWidth >= 1024) setMenuOpen(false)
//     }
//     window.addEventListener('resize', onResize)
//     return () => window.removeEventListener('resize', onResize)
//   }, [])

//   const navLinks = [
//     { href: '#about', de: 'Über uns', en: 'About' },
//     { href: '#experience', de: 'Erlebnisse', en: 'Experiences' },
//     { href: '#menu', de: 'Speisekarte', en: 'Menu' },
//     { href: '#gallery', de: 'Galerie', en: 'Gallery' },
//     { href: '#events', de: 'Events', en: 'Events' },
//     { href: '#contact', de: 'Kontakt', en: 'Contact' },
//   ]

//   const navStyle = {
//     position: 'fixed' as const,
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 2000,
//     backgroundColor: scrolled ? 'rgba(18,16,14,0.82)' : 'transparent',
//     boxShadow: scrolled ? '0 8px 28px rgba(0,0,0,0.22)' : 'none',
//     borderBottom: scrolled ? '1px solid rgba(201,169,110,0.14)' : '1px solid transparent',
//     backdropFilter: scrolled ? 'blur(14px)' : 'none',
//     WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
//     transform: 'translateZ(0)',
//     willChange: 'height, background-color, box-shadow, backdrop-filter',
//     isolation: 'isolate' as const,
//   }

//   return (
//     <>
//       <nav
//         className={`relative flex items-center justify-between gap-3 px-3 sm:px-4 md:px-[4vw] transition-[height,background-color,box-shadow,border-color,backdrop-filter] duration-500 max-lg:px-2.5 ${
//           scrolled ? 'h-[56px] lg:h-[68px]' : 'h-[52px] lg:h-20'
//         }`}
//         style={navStyle}
//       >
//         <Link
//           href="#hero"
//           onClick={() => setMenuOpen(false)}
//           className="flex min-w-0 max-w-[150px] flex-1 flex-col leading-none text-[0.92rem] tracking-[0.12em] text-[var(--gold)] no-underline sm:max-w-[190px] sm:text-[1rem] lg:max-w-[280px] lg:flex-none lg:text-[1.55rem] lg:tracking-[0.15em] max-lg:absolute max-lg:left-2.5 max-lg:top-1/2 max-lg:max-w-[108px] max-lg:-translate-y-1/2 max-lg:text-[0.78rem] max-lg:tracking-[0.1em]"
//           style={{ fontFamily: "'Cormorant Garamond', serif" }}
//         >
//           Neue Liebe
//           <span
//             className="mt-0.5 whitespace-nowrap text-[0.28rem] tracking-[0.16em] text-[var(--gold-light)] sm:text-[0.34rem] sm:tracking-[0.2em] lg:mt-1 lg:text-[0.52rem] lg:tracking-[0.24em] max-lg:text-[0.22rem] max-lg:tracking-[0.1em]"
//             style={{ fontFamily: "'Jost', sans-serif" }}
//           >
//             Restaurant · Nebra (Unstrut)
//           </span>
//         </Link>

//         <ul className="hidden list-none items-center gap-10 lg:flex">
//           {navLinks.map(link => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className="pb-1 text-[0.72rem] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.75)] no-underline transition-colors duration-300 hover:text-[var(--gold)]"
//                 style={{ fontFamily: "'Jost', sans-serif" }}
//               >
//                 {t(link.de, link.en)}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="hidden items-center gap-6 lg:flex">
//           <div className="flex items-center gap-1">
//             <button
//               className={`border px-2 py-1 text-[0.68rem] uppercase tracking-[0.15em] transition-all duration-300 ${
//                 lang === 'de'
//                   ? 'border-[rgba(201,169,110,0.4)] text-[var(--gold)]'
//                   : 'border-transparent text-[rgba(255,255,255,0.5)]'
//               }`}
//               style={{ fontFamily: "'Jost', sans-serif" }}
//               onClick={() => setLang('de')}
//             >
//               DE
//             </button>
//             <span className="text-[0.7rem] text-[rgba(255,255,255,0.2)]">|</span>
//             <button
//               className={`border px-2 py-1 text-[0.68rem] uppercase tracking-[0.15em] transition-all duration-300 ${
//                 lang === 'en'
//                   ? 'border-[rgba(201,169,110,0.4)] text-[var(--gold)]'
//                   : 'border-transparent text-[rgba(255,255,255,0.5)]'
//               }`}
//               style={{ fontFamily: "'Jost', sans-serif" }}
//               onClick={() => setLang('en')}
//             >
//               EN
//             </button>
//           </div>
//           <a
//             href="#reservation"
//             className="bg-[var(--gold)] px-[22px] py-[10px] text-[0.7rem] uppercase tracking-[0.2em] text-[var(--charcoal)] no-underline transition-all duration-300 hover:-translate-y-px hover:bg-[var(--gold-light)]"
//             style={{ fontFamily: "'Jost', sans-serif" }}
//           >
//             {t('Reservieren', 'Reserve')}
//           </a>
//         </div>

//         <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-3 lg:hidden max-lg:absolute max-lg:right-2.5 max-lg:top-1/2 max-lg:min-w-[124px] max-lg:-translate-y-1/2">
//           <div className="flex items-center gap-1 sm:gap-2.5">
//             <button
//               className={`min-w-[34px] border px-1.5 py-[5px] text-[0.48rem] uppercase tracking-[0.1em] transition-all duration-300 sm:min-w-[52px] sm:px-3 sm:py-2 sm:text-[0.68rem] sm:tracking-[0.16em] ${
//                 lang === 'de'
//                   ? 'border-[rgba(201,169,110,0.45)] text-[var(--gold)]'
//                   : 'border-transparent text-[rgba(255,255,255,0.55)]'
//               }`}
//               style={{ fontFamily: "'Jost', sans-serif" }}
//               onClick={() => setLang('de')}
//             >
//               DE
//             </button>
//             <span className="text-[0.62rem] text-[rgba(255,255,255,0.2)]">|</span>
//             <button
//               className={`min-w-[22px] border border-transparent px-0.5 py-[5px] text-[0.48rem] uppercase tracking-[0.1em] transition-all duration-300 sm:min-w-[36px] sm:px-2 sm:py-2 sm:text-[0.68rem] sm:tracking-[0.16em] ${
//                 lang === 'en'
//                   ? 'border-[rgba(201,169,110,0.45)] text-[var(--gold)]'
//                   : 'text-[rgba(255,255,255,0.55)]'
//               }`}
//               style={{ fontFamily: "'Jost', sans-serif" }}
//               onClick={() => setLang('en')}
//             >
//               EN
//             </button>
//           </div>

//           <button
//             className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border border-[rgba(201,169,110,0.32)] sm:h-9 sm:w-9"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Menu"
//             aria-expanded={menuOpen}
//           >
//             {menuOpen ? (
//               <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[14px] w-[14px] text-[var(--gold)] sm:h-6 sm:w-6">
//                 <path
//                   d="M6 6L18 18M18 6L6 18"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.9"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             ) : (
//               <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[14px] w-[14px] text-[var(--gold)] sm:h-6 sm:w-6">
//                 <path
//                   d="M4 7H20M4 12H20M4 17H20"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.9"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </nav>

//       <div
//         className={`fixed inset-0 z-[1998] flex flex-col items-center gap-6 overflow-y-auto bg-[rgba(18,16,14,0.97)] px-6 pb-8 pt-24 backdrop-blur-xl transition-transform duration-500 sm:pt-28 ${
//           menuOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         {navLinks.map(link => (
//           <a
//             key={link.href}
//             href={link.href}
//             onClick={() => setMenuOpen(false)}
//             className="text-center text-[clamp(1.75rem,9vw,2.5rem)] font-light tracking-[0.1em] text-[var(--beige)] no-underline transition-colors duration-300 hover:text-[var(--gold)]"
//             style={{ fontFamily: "'Cormorant Garamond', serif" }}
//           >
//             {t(link.de, link.en)}
//           </a>
//         ))}
//         <a
//           href="#reservation"
//           onClick={() => setMenuOpen(false)}
//           className="mt-2 border border-[rgba(201,169,110,0.45)] px-4 py-2 text-center text-[clamp(1.75rem,9vw,2.5rem)] font-light tracking-[0.1em] text-[var(--gold)] no-underline"
//           style={{ fontFamily: "'Cormorant Garamond', serif" }}
//         >
//           {t('Reservieren', 'Reserve')}
//         </a>
//       </div>
//     </>
//   )
// }
