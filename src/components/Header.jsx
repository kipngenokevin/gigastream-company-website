import Navbar from './Navbar'

export default function Header() {
    return (
		<header className='container'>
			<div className='row'>
				<div className='col-sm-4'>
					<img
						width={"200rem"}
						className='img-fluid'
						src='https://res.cloudinary.com/dipqldzry/image/upload/v1754385797/logo_yxzllg.svg'
						alt='Gigastream Logo'
					/>
				</div>
				<div className='col-sm-8 d-flex justify-content-end align-items-center'>
					<Navbar />
				</div>
			</div>
		</header>
	);
}