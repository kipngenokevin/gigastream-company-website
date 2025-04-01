import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Scroll from './components/Scroll'

export default function Hero() {
    return (
        <section className="hero-section d-flex flex-column justify-content-between">
         <Header />
         <HeroSection />
         <Scroll />
        </section>
    )
}