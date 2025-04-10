import AdsLogo from '../../public/adicon.png'
import Sustain from '../../public/sustainabilityicon.png'
import Branding from '../../public/brandingicon.png'
import B2B from '../../public/b2bicon.png'
import ModalComponent from './ModalComponent'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WorkContainer = () => {
  const workContainer = useRef(null);
  useEffect(() => {
    gsap.from(
      'work-container',
      {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: workContainer.current,
          start: 'top 100%',
          scrub: true,
          toggleActions: 'play none none reverse',
        }
      }
    )
    gsap.to(
      'work-container',
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: workContainer.current,
          start: 'top 100%',
          scrub: true,
          toggleActions: 'play none none reverse',
        }
      }
    )
  });
    const modalData = [
      {
        title: 'MEDIA',
        description: 'We deliver innovative solutions through our connected network, ensuring cutting-edge reach and impact',
        moreDescription:'We deliver forward-thinking, innovative solutions by harnessing the power of our seamlessly connected global network. Through this dynamic ecosystem of collaboration and technology, we ensure our clients benefit from expansive reach, real-time agility, and transformative impact. Our approach merges strategic insight with state-of-the-art capabilities to create solutions that are not only cutting-edge but also deeply resonant with modern audiences—driving measurable growth, relevance, and long-term success.',
        bgColor: 'red-bg',
        logo: AdsLogo
      },
      {
        title: 'SUSTAINABILITY',
        description: 'We provide scalable advertising solutions that align with eco-conscious practices and long-term growth.',
        moreDescription:'We offer scalable advertising solutions that are not only designed to drive impactful results but also firmly align with eco-conscious practices. By integrating sustainability into every facet of our approach, we ensure that your brand’s growth is not just measurable, but responsible and enduring. Our solutions empower businesses to thrive in an ever-evolving market, fostering long-term success while minimizing environmental impact—because we believe that true growth is rooted in both innovation and sustainability.',
        bgColor: 'purple-bg',
        logo: Sustain
      },
      {
        title: 'B2B/ B2C TECH SOLUTIONS',
        description: 'We build dynamic tools designed to engage audiences across diverse ecosystems, driving meaningful interactions',
        moreDescription:'We design and build dynamic, cutting-edge tools meticulously crafted to captivate and engage audiences across a wide array of diverse ecosystems. With a deep understanding of audience behavior and technological innovation, our solutions are tailored to foster authentic, meaningful interactions that resonate and inspire. By bridging the gap between your brand and its audience, we create experiences that not only engage but also drive lasting connections, ensuring that every touchpoint becomes an opportunity for growth, impact, and loyalty.',
        bgColor: 'red-bg',
        logo: B2B
      },
      {
        title: 'BRANDING',
        description: 'We deliver Bespoke outstanding innovations in branding services',
        moreDescription:'At the heart of our mission lies a commitment to delivering bespoke, groundbreaking innovations in branding—carefully tailored to reflect the unique essence of every client we serve. We don\'t just build brands; we craft immersive stories, shape powerful identities, and design experiences that resonate deeply with audiences. Through a blend of strategic thinking, artistic creativity, and market insight, we transform abstract ideas into living, breathing brand expressions that inspire loyalty, drive recognition, and leave a lasting imprint in the minds and hearts of your audience.',
        bgColor: 'purple-bg',
        logo: Branding
      }
    ];
  
    return (
      <div className="d-flex flex-wrap justify-content-center py-10">
        
        {modalData.map((item, index) => (
          <ModalComponent
            ref={workContainer}
            key={index}
            title={item.title}
            description={item.description}
            moreDescription={item.moreDescription}
            bgColor={item.bgColor}
            logo={item.logo}
          />
        ))}
      </div>
    );
  };
  
  export default WorkContainer;