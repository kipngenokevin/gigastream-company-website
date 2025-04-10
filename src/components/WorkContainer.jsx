import AdsLogo from '../../public/adicon.png'
import Sustain from '../../public/sustainabilityicon.png'
import Branding from '../../public/brandingicon.png'
import B2B from '../../public/b2bicon.png'
import ModalComponent from './ModalComponent'

const WorkContainer = () => {
    const modalData = [
      {
        title: 'MEDIA',
        description: 'We deliver innovative solutions through our connected network, ensuring cutting-edge reach and impact',
        bgColor: 'red-bg',
        logo: AdsLogo
      },
      {
        title: 'SUSTAINABILITY',
        description: 'We provide scalable advertising solutions that align with eco-conscious practices and long-term growth.',
        bgColor: 'purple-bg',
        logo: Sustain
      },
      {
        title: 'B2B/ B2C TECH SOLUTIONS',
        description: 'We build dynamic tools designed to engage audiences across diverse ecosystems, driving meaningful interactions',
        bgColor: 'red-bg',
        logo: B2B
      },
      {
        title: 'BRANDING',
        description: 'We deliver Bespoke outstanding innovations in branding services',
        bgColor: 'purple-bg',
        logo: Branding
      }
    ];
  
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {modalData.map((item, index) => (
          <ModalComponent
            key={index}
            title={item.title}
            description={item.description}
            bgColor={item.bgColor}
            logo={item.logo}
          />
        ))}
      </div>
    );
  };
  
  export default WorkContainer;