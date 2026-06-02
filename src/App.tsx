import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { BeyondCode } from './components/BeyondCode'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { AnimatedBackground } from './components/AnimatedBackground'
import { MouseSpotlight } from './components/MouseSpotlight'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-200">
      <AnimatedBackground />
      <MouseSpotlight />
      <Nav />
      <main className="relative z-10 mx-auto max-w-5xl px-6">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
