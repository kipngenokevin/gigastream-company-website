import Arrow from "../../public/arrow.svg"
import Gradient from "../../public/gradient.svg"

export default function Blog() {
    return (
        <section id="blog" className="blog-section d-flex align-items-center">
            <div className="container ">
                <div className="col-sm-6">
                    <img className="img-fluid" src={Gradient} alt="gradient" />
                    <h2 className="title">Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore </p>
                    <div className="work-container-btn"> <button className="dark-bg" ><b>Read More</b> <img src={Arrow} alt="Arrow" /></button> </div>
                </div>
            </div>
        </section>
    )
}