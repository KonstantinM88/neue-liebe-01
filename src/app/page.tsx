import Navigation    from '@/components/Navigation'
import Loader        from '@/components/Loader'
import Cursor        from '@/components/Cursor'
import ScrollProgress from '@/components/ScrollProgress'
import Hero          from '@/components/Hero'
import InfoBar       from '@/components/InfoBar'
import About         from '@/components/About'
import Experience    from '@/components/Experience'
import MenuSection   from '@/components/MenuSection'
import ParallaxQuote from '@/components/ParallaxQuote'
import Gallery       from '@/components/Gallery'
import Events        from '@/components/Events'
import Reservation   from '@/components/Reservation'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <InfoBar />
        <About />
        <Experience />
        <MenuSection />
        <ParallaxQuote />
        <Gallery />
        <Events />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
