import AdsLogo from '../../public/adsicon.png'
import Sustain from '../../public/sustain.png'
import Branding from '../../public/branding.png'

export default function WorkContainer() {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            <div className="work-container red-bg text-left d-flex flex-column justify-content-between">
                <img width={100} src={AdsLogo} alt="ads Icon" />
                <h5>MEDIA</h5>
                <p>We deliver innovative solutions through our connected network, ensuring cutting-edge reach and impact</p>
                <div className="work-container-btn"> <button className="red-bg">More</button> </div>
            </div>
            <div className="work-container purple-bg text-left d-flex flex-column justify-content-between">
                <img width={100} src={Sustain} alt="ads Icon" />
                <h5>SUSTAINABILITY</h5>
                <p>We provide scalable advertising solutions that align with eco-conscious practices and long-term growth.</p>
                <div className="work-container-btn"> <button className="purple-bg">More</button> </div>
            </div>
            <div className="work-container red-bg text-left d-flex flex-column justify-content-between">
                <img width={100} src={Sustain} alt="ads Icon" />
                <h5>B2B/ B2C TECH SOLUTIONS</h5>
                <p>We build dynamic tools designed to engage audiences across diverse ecosystems, driving meaningful interactions</p>
                <div className="work-container-btn"> <button className="red-bg">More</button> </div>
            </div>
            <div className="work-container purple-bg text-left d-flex flex-column justify-content-between">
                <img width={100} src={Branding} alt="ads Icon" />
                <h5>BRANDING</h5>
                <p>We deliver Bespoke outstanding innovations in branding services</p>
                <div className="work-container-btn"> <button className="purple-bg">More</button> </div>
            </div>
        </div>
    )
}