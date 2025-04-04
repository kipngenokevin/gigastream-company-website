import HewaSafi from "../../public/hewasafi.png"
import Express from "../../public/expressway.png"
import Tolls from "../../public/tollbooths.png"

export default function CaseStudies() {
    return(
        <section className="case-section">
            <div className="container">
                <h2 className="title text-center">Latest Case Studies</h2>
                <div className="col-sm-12 d-flex justify-content-between align-items-center case-main">
                    <div className="case-container">
                        <img className="img-fluid" src={HewaSafi} alt="" />
                    </div>
                    <div className="case-container">
                        <img className="img-fluid" src={Express} alt="" />
                    </div>
                    <div className="case-container">
                        <img className="img-fluid" src={Tolls} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}