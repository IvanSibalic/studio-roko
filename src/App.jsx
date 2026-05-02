import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import Booking from './components/Booking.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-cream text-dark font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}
