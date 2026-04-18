import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Philosophy from './components/Philosophy'
import Platform from './components/Platform'
import Onboarding from './components/Onboarding'
import Features from './components/Features'
import TriggerExample from './components/TriggerExample'
import HowItWorks from './components/HowItWorks'
import Learning from './components/Learning'
import Personalization from './components/Personalization'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Trust from './components/Trust'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Philosophy />
      <Platform />
      <Onboarding />
      <Features />
      <TriggerExample />
      <HowItWorks />
      <Learning />
      <Personalization />
      <Pricing />
      <FAQ />
      <Trust />
      <FinalCTA />
      <Footer />
    </div>
  )
}
