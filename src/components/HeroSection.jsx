import { useState, useEffect } from "react"
import Arrow from "../../public/arrow.svg"

export default function HeroSection () {
    const [text, setText] = useState(true)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsVisible(false)
            setTimeout(() => {
                setText(!text)
                setIsVisible(true)
            }, 1000)
        }, 5000)

        return () => clearInterval(intervalId)
    }, [text])

    const handleClick = () => {
        setIsVisible(false)
        setTimeout(() => {
            setText(!text)
            setIsVisible(true)
        }, 1000)
    }

    return (
        <section className="container d-flex justify-content-between align-items-center hero-main">
            <div className="d-flex justify-content-start align-items-center">
                <span className="material-symbols-outlined arrows" onClick={handleClick}>
                    arrow_back_ios
                </span>
            </div>
            <div className="col-sm-6 d-flex-justify-content-start">
                <h1 className={`hero-title ${isVisible ? "active" : ""}`}>{text ? "AMPLYFYING BRANDS" : "ENGAGING AUDIENCES"}</h1>
                <div className="in-touch-btn"> <button >GET IN TOUCH <img src={Arrow} alt="Arrow" /></button> </div> 
            </div>
            <div className="col-sm-2 d-flex justify-content-end align-items-center">
                <span className="material-symbols-outlined arrows" onClick={handleClick}>
                        arrow_forward_ios
                </span>
            </div>
        </section>
    )
}