import { useState } from "react";
import { Formik, Field, Form } from 'formik';

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './product-head.scss';

const ProductHead = (props) => {
	const [mainImg, setMainImg] = useState(0);
	const [basket, setBasket] = useState([]);
	const [added, setAdded] = useState(null);

	const { dataBase } = props;
	const { name, photos, price, color, size } = dataBase[3].clothes[2];

	const addActiveClass = (selector, index) => {
		const checkBoxes = document.querySelectorAll(selector);
		checkBoxes.forEach(e => e.classList.remove('active'));
		checkBoxes[index].classList.add('active');
	}

	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: "linear",
	};

	return (
		<div className="product">
			<Formik
				initialValues={{
					img: photos[0],
					title: name,
					price: price,
					color: '',
					size: '',

				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 150));
					if (basket.find((e) => values.size == e.size && values.color == e.color && values.title == e.title)) {
						setAdded(1);
						alert('Ви вже добавили цей товар!');
					} else {
						console.log(basket.find((e) => e == values.size))
						setBasket(basket => [...basket, values]);
						setAdded(1);
					}
				}}
			>
				{({ values }) => (
					<Form>
						<div role="group" aria-labelledby="my-radio-group">
							<div className="product__row">

								<div className="product__slider">
									<div className="product__active-slide">
										<span className="active-slide__prev"></span>
										<img src={photos[mainImg]} alt="" width={'400px'} height={'500px'} />
										<span className="active-slide__next"></span>
									</div>

									<div className="product__slides">
										{
											photos.map((img, i) => {
												return (
													<div key={`image + 000 + ${i}`}>
														<img
															src={img}
															width={'90px'}
															height={'122px'}
															onClick={() => setMainImg(i)}
														/>
													</div>
												)
											})
										}
									</div>


								</div>
								<div className="product__content">
									<a href="" className='product__title'><h5>{name}</h5></a><br />
									<span className='product__stock'>{'В наявності'}</span> <br />
									<span className='product__price'>{price} грн</span>
									<div className="product__color">
										<span>Колір:</span>
										<div className="info-boxes colores">
											{
												color.map((e, i) => {
													return (
														<label key={`color + 000 + ${i}`}>
															<div className="info-box color" style={{ "backgroundColor": `#${e}` }}>
																<Field
																	className="field"
																	type="radio"
																	name="color"
																	value={e}
																	required
																	onClick={() => {
																		addActiveClass('.color', i);
																		setAdded(false);
																	}}
																/>
															</div>
														</label>
													)
												})
											}
										</div>
									</div>
									<div className="product__size">
										<span>Розмір:</span>
										<div className="info-boxes sizes">
											{
												size.map((e, i) => {
													return (
														<label label key={`size + 000 + ${i}`}>
															<div className="info-box size">
																<Field
																	required
																	className="field"
																	type="radio"
																	name="size"
																	value={e}
																	onClick={() => {
																		addActiveClass('.size', i);
																		setAdded(false);
																	}}
																/>{e}</div>
														</label>
													)
												})
											}
										</div>
									</div>
									<button
										className='product__add'
										type="submit"
									>{added ? 'Добавлено' : 'Добавити в корзину'}</button>
								</div>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div >
	)
}

export default ProductHead;