import Mouse from '../../public/mouse.svg'

export default function Scroll() {
    return (
        <div className="col-sm-12 d-flex justify-content-center">
            <div className='text-center'>
                <img className='img-fluid' src={Mouse} alt="Scroll down" width={40} style={{"margin":"1rem"}}/>
                <h5>SCROLL DOWN</h5>
            </div>
            

        </div>
    )
}