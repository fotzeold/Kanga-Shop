import './MainBanner.scss';
import banner from '../../../../assets/mainCategory/perBanner.png'

const MainBanner = () => {

	return (
		<div className="main-banner">
			<div className="banner">
				<img src={banner} alt=""/>
				<div className="banner__text">
					<span className='percent'>-10%</span>
					<span className='text'>на кожну третю <br /> одиницю товару!</span>
				</div>
			</div>
		</div>
	)
}

export default MainBanner;