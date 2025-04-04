export default function Clients() {
    return(
        <section className="clients-section">
            <div className="container">
                <div className="col-sm-12">
                    <h2 className="text-center title">Our Clients</h2>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
                    euismod tincidunt ut laoreet dolore </p>

                    <div className="d-flex justify-content-around align-items-center clients-container">
                        <img className="img-fluid" src="https://artcaffemenu.ubuntu.click/images/Artcaffe-Logo.png" alt="Artcaffe" width={150}/>
                        <img className="img-fluid" src="https://radissonblu-menu.ubuntu.click/images/logo.png" alt="Radisson Blu" width={150}/>
                        <img className="img-fluid" src="https://artcaffemenu.ubuntu.click/images/SAF-MAIN-LOGO.png" alt="Safaricom" width={150}/>
                        <img className="img-fluid" src="https://cdn-webportal.airtelstream.net/website/kenya/assets/images/logo.svg" alt="Airtel" width={150}/>
                    </div>
                </div>
            </div>
        </section>
    )
}