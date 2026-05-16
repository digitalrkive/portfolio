import { useEffect } from 'react'
import '../styles/Hero.css'

export default function Hero() {
  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      document.documentElement.style.setProperty('--mx', `${x}px`)
      document.documentElement.style.setProperty('--my', `${y}px`)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-tag">cs graduate · junior software eng · space nerd</p>
        <h1 className="hero-name">
          <span className="dim">Henna</span>
          <span className="accent">is just</span>
          <span className="bright">da goat.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-sub">
            building things for the web.<br />
            obsessed with <em>space</em>, design,<br />
            and the unknown.
          </p>
          <div className="hero-scroll">scroll and interact to explore</div>
        </div>
      </div>
    </section>
  )
}