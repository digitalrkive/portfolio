import { useEffect, useRef } from 'react'
import '../styles/Nebula.css'

export default function Nebula() {
  const n1 = useRef(null)
  const n2 = useRef(null)
  const n3 = useRef(null)
  const n4 = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY

      if (n1.current) n1.current.style.transform = `translate(${y * 0.08}px, ${y * 0.12}px) scale(1)`
      if (n2.current) n2.current.style.transform = `translate(${y * -0.06}px, ${y * 0.08}px) scale(1)`
      if (n3.current) n3.current.style.transform = `translate(${y * 0.04}px, ${y * -0.06}px) scale(1)`
      if (n4.current) n4.current.style.transform = `translate(${y * -0.1}px, ${y * 0.05}px) scale(1)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="nebula-wrap">
      <div ref={n1} className="nebula n1" />
      <div ref={n2} className="nebula n2" />
      <div ref={n3} className="nebula n3" />
      <div ref={n4} className="nebula n4" />
    </div>
  )
}