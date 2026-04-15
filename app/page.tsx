import Sidebar    from '@/components/layout/Sidebar'
import SocialFloat from '@/components/layout/SocialFloat'
import Hero        from '@/components/sections/Hero'
import About       from '@/components/sections/About'
import Projects    from '@/components/sections/Projects'
import Experience  from '@/components/sections/Experience'
import Testimonials from '@/components/sections/Testimonials'
import Game        from '@/components/sections/Game'
import Contact     from '@/components/sections/Contact'
import Footer      from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <SocialFloat />
      <main className="ml-[220px] flex-1 min-h-screen max-[900px]:ml-0">
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
