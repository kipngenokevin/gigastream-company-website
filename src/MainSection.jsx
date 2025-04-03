import Logo from '../public/logo.svg'
import OurWork from './components/OurWork'
import BlogSection from './components/BlogSection'
import CaseStudies from './components/CaseStudies'
import OurClients from './components/Clients'

export default function MainSection() {
    return(
        <section className='main-section'>
            <OurWork />
            <BlogSection />
            <CaseStudies />
            <OurClients />
        </section>
    )
}