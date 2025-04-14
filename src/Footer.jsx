import Map from "./components/Map"
import Mail from "../public/mail.svg"
import Phone from "../public/phone.svg"

export default function Footer () {
    return (
        <footer className="d-flex flex-column justify-content-center align-items-center">
            <div id="contact" className="col-sm-12 text-center">
                <h2 className="title">CONTACT US</h2>
                <Map />
                <div className="d-flex contact-section justify-content-around align-items-center">
                    <div className="d-flex align-items-center contact-item">
                        <img src={Mail} alt="" width={40} />
                        <div className="text-left">
                            <h6>Mail us at</h6>
                            <p>info@gigastreammedia.com</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center contact-item">
                        <img src={Phone} alt="" width={40} />
                        <div className="text-left">
                            <h6>Call us at</h6>
                            <p>0726 002 601</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}