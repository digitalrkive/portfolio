import StarField from './components/StarField'
import Nebula from './components/Nebula'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './styles/index.css'

export default function App() {
  return (
    <div style={{ position: 'relative', background: '#020008', minHeight: '100vh' }}>
      <Nebula />
      <StarField />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Project />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}