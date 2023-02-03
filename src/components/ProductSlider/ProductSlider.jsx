import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard";

import './product-slider.scss';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const ProductSlider = (props) => {
	const base = props.dataBase;

	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 2000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 980,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	};

	return (
		<div className="product__slider">
			<Slider {...settings}>
				{
					base.map((e, i) => {
						return (
							<div key={e._id} className="slide">
								<ProductCard product={e} />
							</div>
						)
					})
				}
			</Slider>
		</div>
	)

}

export default ProductSlider;