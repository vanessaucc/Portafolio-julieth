import TopNav      from '@/components/layout/TopNav'
import SocialFloat  from '@/components/layout/SocialFloat'
import Hero         from '@/components/sections/Hero'
import About        from '@/components/sections/About'
import AiTools      from '@/components/sections/AiTools'
import Projects     from '@/components/sections/Projects'
import Experience   from '@/components/sections/Experience'
import Testimonials from '@/components/sections/Testimonials'
import Game         from '@/components/sections/Game'
import Contact      from '@/components/sections/Contact'
import Footer       from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <TopNav />
      <SocialFloat />
      <main className="pt-16 w-full">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Game />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
