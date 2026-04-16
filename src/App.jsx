import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Platform from './components/Platform'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Trust from './components/Trust'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Platform />
      <Features />
      <HowItWorks />
      <Pricing />
      <Trust />
      <FinalCTA />
      <Footer />
    </div>
  )
}
