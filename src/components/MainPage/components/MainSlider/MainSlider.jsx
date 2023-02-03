import Slider from "react-slick";

import './main-slider.scss';
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";

import IMG_1 from "../../../../assets/mainSlider/Sport.png"
import IMG_2 from "../../../../assets/mainSlider/Home.png"
import IMG_3 from "../../../../assets/mainSlider/Jackets.png"
import IMG_4 from "../../../../assets/mainSlider/Dress.png"

const MainSlider = () => {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false,
				}
			}
		]
	};

	return (
		<div className="main__slider">
			<div>
				<Slider {...settings}>
					<div className="slide">
						<img src={IMG_1} alt="Sport" />
					</div>
					<div className="slide">
						<img src={IMG_2} alt="Home" />
					</div>
					<div className="slide">
						<img src={IMG_3} alt="Jackets" />
					</div>
					<div className="slide">
						<img src={IMG_4} alt="Dress" />
					</div>
				</Slider>
			</div>
		</div>
	)
}

export default MainSlider;