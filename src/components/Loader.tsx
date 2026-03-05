'use client'

import { useEffect, useState } from 'react'
import styles from './Loader.module.css'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1800)
    return () => clearTimeout(t)
  }, [])

  if (hidden) return null

  return (
    <div className={styles.loader}>
      <div className={styles.brand}>Neue Liebe</div>
      <div className={styles.line} />
    </div>
  )
}
