import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Differentials } from '../components/Differentials'
import { HowItWorks } from '../components/HowItWorks'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

export default function Index() {
  return (
    <div className="relative min-h-screen bg-preto text-branco">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}
