import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import ProductShowcase from './components/ProductShowcase'
import Pricing from './components/Pricing'
import Trust from './components/Trust'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <ProductShowcase />
      <Pricing />
      <Trust />
      <FinalCTA />
      <Footer />
    </div>
  )
}
