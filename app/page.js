import Sidebar from '../components/Sidebar'
import SocialFloat from '../components/SocialFloat'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Game from '../components/Game'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="layout">
      <Sidebar />
      <SocialFloat />

      <main className="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Game />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
