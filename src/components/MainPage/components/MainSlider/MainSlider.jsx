import Slider from "react-slick";

import './main-slider.scss';
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";

import firstSlideImgM from "../../../../assets/mainSlider/1.png"
import secondSlideImgM from "../../../../assets/mainSlider/2.png"

const MainSlider = () => {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		speed: 500,
		autoplaySpeed: 3000,
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
						<img src={firstSlideImgM} alt="" />
					</div>
					<div className="slide">
						<img src={secondSlideImgM} alt="" />
					</div>
					<div className="slide">
						<h3>3</h3>
					</div>
					<div className="slide">
						<h3>4</h3>
					</div>
					<div className="slide">
						<h3>5</h3>
					</div>
					<div className="slide">
						<h3>6</h3>
					</div>
				</Slider>
			</div>
		</div>
	)
}

export default MainSlider;