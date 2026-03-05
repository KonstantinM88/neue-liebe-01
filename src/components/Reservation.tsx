'use client'

import { useState } from 'react'
import { useLang } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import styles from './Reservation.module.css'

export default function Reservation() {
  const { t } = useLang()
  const header  = useReveal()
  const [toast, setToast]   = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setToast(t('✓ Reservierung eingegangen – Wir melden uns!', '✓ Reservation received – We will be in touch!'))
        form.reset()
      } else {
        setToast(t('Fehler – Bitte erneut versuchen.', 'Error – Please try again.'))
      }
    } catch {
      setToast(t('Fehler – Bitte erneut versuchen.', 'Error – Please try again.'))
    } finally {
      setLoading(false)
      setTimeout(() => setToast(''), 3500)
    }
  }

  return (
    <section id="reservation" className={styles.section}>
      <div className={styles.container}>
        <p
          ref={header.ref}
          className={`section-label reveal ${header.visible ? 'visible' : ''} ${styles.label}`}
        >
          {t('Ihren Platz sichern', 'Secure Your Seat')}
        </p>
        <h2 className={`section-title reveal ${header.visible ? 'visible' : ''} ${styles.title}`}>
          {t('Tisch reservieren', 'Reserve a Table')}
        </h2>
        <p className={`reveal ${header.visible ? 'visible' : ''} ${styles.sub}`}>
          {t(
            'Wir freuen uns auf Ihren Besuch. Reservieren Sie jetzt Ihren Tisch und erleben Sie die Neue Liebe hautnah.',
            'We look forward to your visit. Reserve your table now and experience Neue Liebe first-hand.'
          )}
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>{t('Vorname', 'First Name')}</label>
            <input name="firstName" type="text" placeholder="Maria" required />
          </div>
          <div className={styles.field}>
            <label>{t('Nachname', 'Last Name')}</label>
            <input name="lastName" type="text" placeholder="Müller" required />
          </div>
          <div className={styles.field}>
            <label>E-Mail</label>
            <input name="email" type="email" placeholder="maria@beispiel.de" required />
          </div>
          <div className={styles.field}>
            <label>{t('Telefon', 'Phone')}</label>
            <input name="phone" type="tel" placeholder="+49 ..." required />
          </div>
          <div className={styles.field}>
            <label>{t('Datum', 'Date')}</label>
            <input name="date" type="date" required />
          </div>
          <div className={styles.field}>
            <label>{t('Uhrzeit', 'Time')}</label>
            <input name="time" type="time" defaultValue="19:00" required />
          </div>
          <div className={styles.field}>
            <label>{t('Personen', 'Guests')}</label>
            <select name="guests">
              {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n}</option>)}
              <option value="9+">{t('Mehr als 8', 'More than 8')}</option>
            </select>
          </div>
          <div className={styles.field}>
            <label>{t('Anlass', 'Occasion')}</label>
            <select name="occasion">
              <option>{t('Dinner', 'Dinner')}</option>
              <option>{t('Geburtstag', 'Birthday')}</option>
              <option>{t('Hochzeit', 'Wedding')}</option>
              <option>{t('Firmenfeier', 'Corporate Event')}</option>
            </select>
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label>{t('Sonderwünsche', 'Special Requests')}</label>
            <textarea name="notes" rows={3} />
          </div>
          <button type="submit" className={`${styles.submit} ${styles.full}`} disabled={loading}>
            {loading
              ? t('Wird gesendet…', 'Sending…')
              : t('Reservierung bestätigen', 'Confirm Reservation')
            }
          </button>
        </form>
      </div>

      {toast && <div className={styles.toast}>{toast}</div>}
    </section>
  )
}
