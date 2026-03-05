'use client'

import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cx = 0, cy = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => {
      cx = e.clientX; cy = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = cx + 'px'
        cursorRef.current.style.top  = cy + 'px'
      }
    }
    const loop = () => {
      rx += (cx - rx) * 0.1
      ry += (cy - ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      requestAnimationFrame(loop)
    }
    const addHover = (el: Element) => {
      el.addEventListener('mouseenter', () => {
        cursorRef.current?.classList.add(styles.hover)
        ringRef.current?.classList.add(styles.hover)
      })
      el.addEventListener('mouseleave', () => {
        cursorRef.current?.classList.remove(styles.hover)
        ringRef.current?.classList.remove(styles.hover)
      })
    }
    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button').forEach(addHover)
    const af = requestAnimationFrame(loop)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(af)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={ringRef}   className={styles.ring}   />
    </>
  )
}
