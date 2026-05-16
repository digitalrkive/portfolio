import { useState } from 'react'
import '../styles/Project.css'

const projects = [
  {
    num: '01',
    name: 'DashBuddy',
    desc: 'Personal productivity dashboard with clock, tasks, flashcards and Rocky quotes. (more to come)',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/digitalrkive/dashbuddy',
    detail: 'A fully client-side dashboard app. No frameworks, no dependencies, just vanilla JS doing a lot of heavy lifting. Taught me how to structure a real project from scratch.',
  },
  {
    num: '02',
    name: 'Tenant Website',
    desc: 'White-label React platform for mosques and Islamic centres.',
    tech: ['React', 'Vite', 'JSX'],
    link: 'https://github.com/HikamSoftware/tenant-website',
    detail: 'A reusable site platform where swapping one config file changes the entire client. Built for real organisations, proper component architecture, prayer times API, the works.',
  },
  {
    num: '03',
    name: 'This Portfolio',
    desc: 'Built from scratch. No templates. Pure obsession.',
    tech: ['React', 'CSS', 'Canvas'],
    link: '#',
    detail: 'Designed and built by me. Spent a while drafting the page layout on Canva ofc. Because why have a boring portfolio. This is like my second beepboop child (DashBuddy is No.1 duh)',
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section className="projects">
      <p className="sec-tag">// work</p>

      <div className="projects-list">
        {projects.map((p, i) => (
          <div
            key={i}
            className="proj-row"
            onClick={() => setActive(p)}
          >
            <span className="proj-num">{p.num}</span>
            <div className="proj-info">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
            <div className="proj-tags">
              {p.tech.map(t => <span key={t} className="proj-tag">{t}</span>)}
            </div>
            <span className="proj-arrow">↗</span>
          </div>
        ))}
      </div>

      {active && (
        <div className="popup-overlay" onClick={() => setActive(null)}>
          <div className="popup" onClick={e => e.stopPropagation()}>
            <div className="popup-glow" />
            <p className="popup-num">{active.num}</p>
            <h2 className="popup-name">{active.name}</h2>
            <p className="popup-detail">{active.detail}</p>
            <div className="popup-tech">
              {active.tech.map(t => <span key={t} className="proj-tag">{t}</span>)}
            </div>
            <div className="popup-actions">
              <a href={active.link} target="_blank" rel="noreferrer" className="popup-link">
                View on GitHub ↗
              </a>
              <button className="popup-close" onClick={() => setActive(null)}>
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}