/** @format */

export default function Map() {
	return (
		<>
			<div className='col-sm-12 d-flex justify-content-center maps-container rounded-sm'>
				<iframe
					className="rounded-sm"
					width='80%'
					height='400'
					frameborder='0'
					scrolling='no'
					marginheight='0'
					marginwidth='0'
					id='gmap_canvas'
					src='https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20+(Riverside%20Drive)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>{" "}
				<script
					type='text/javascript'
					src='https://embedmaps.com/google-maps-authorization/script.js?id=eb410cb97cb69ea57f39bee9d6f6e5da66b3b0a6'></script>
			</div>
		</>
	);
}
