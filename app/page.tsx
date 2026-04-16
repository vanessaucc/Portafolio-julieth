import LayoutWrapper from '@/components/layout/LayoutWrapper'
import Hero           from '@/components/sections/Hero'
import About          from '@/components/sections/About'
import Projects       from '@/components/sections/Projects'
import Experience     from '@/components/sections/Experience'
import Testimonials   from '@/components/sections/Testimonials'
import Game           from '@/components/sections/Game'
import Contact        from '@/components/sections/Contact'
import Footer         from '@/components/layout/Footer'

export default function Home() {
  return (
    <LayoutWrapper>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Game />
      <Contact />
      <Footer />
    </LayoutWrapper>
  )
}
