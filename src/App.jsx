import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Gallery from './components/Gallery.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import Reviews from './components/Reviews.jsx'
import Booking from './components/Booking.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-cream text-dark font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <div className="hairline" />
        <Services />
        <WhyUs />
        <Reviews />
        <Booking />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
