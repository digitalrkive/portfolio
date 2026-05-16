import { useState } from 'react'
import '../styles/Skills.css'

const skills = [
  {
    name: 'HTML',
    level: 90,
    tag: 'solid',
    detail: 'My foundation. I can structure anything, accessible, clean. The thing everything else is built on top of.',
  },
  {
    name: 'CSS',
    level: 85,
    tag: 'solid',
    detail: 'This is where my design brain kicks in. Animations, layouts, responsive design :D I genuinely enjoy CSS more than most people think is normal.',
  },
  {
    name: 'JavaScript',
    level: 65,
    tag: 'good',
    detail: 'Comfortable with DOM manipulation, events, localStorage, fetch, canvas. Still learning the deeper stuff but getting there fast.',
  },
  {
    name: 'React',
    level: 55,
    tag: 'growing',
    detail: 'Components, props, state, hooks, context . Still building experience but games the game.',
  },
  {
    name: 'Git',
    level: 60,
    tag: 'good',
    detail: 'Branching, committing, pushing, pulling. I use it every day. Merge conflicts still make me nervous.',
  },
  {
    name: 'living as the goat',
    level: 100,
    tag: 'fab',
    detail: 'Undefeated. Unmatched. Undeniable.',
  },
]

export default function Skills() {
  const [active, setActive] = useState(null)

  return (
    <section className="skills">
      <p className="sec-tag">// skills</p>

      <div className="skills-inner">
        {skills.map((s, i) => (
          <div
            key={i}
            className={`skill-item ${s.name === 'living as the goat' ? 'skill-goat' : ''}`}
            onClick={() => setActive(s)}
          >
            <span className="skill-idx">0{i + 1}</span>
            <h3 className="skill-name">{s.name}</h3>
            <div className="skill-track">
              <div className="skill-fill" style={{ width: `${s.level}%` }} />
            </div>
            <span className="skill-tag">{s.tag}</span>
          </div>
        ))}
      </div>

      {active && (
        <div className="popup-overlay" onClick={() => setActive(null)}>
          <div className="popup" onClick={e => e.stopPropagation()}>
            <div className="popup-glow" />
            <p className="popup-label">// skill</p>
            <h2 className="popup-name">{active.name}</h2>
            <div className="popup-bar-wrap">
              <div className="popup-bar">
                <div className="popup-fill" style={{ width: `${active.level}%` }} />
              </div>
              <span className="popup-pct">{active.level}%</span>
            </div>
            <p className="popup-detail">{active.detail}</p>
            <button className="popup-close" onClick={() => setActive(null)}>
              close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}