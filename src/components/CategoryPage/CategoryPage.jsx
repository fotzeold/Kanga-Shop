import './category-page.scss';
import ProductCard from '../ProductCard/ProductCard';

const CategoryPage = (props) => {

	const dataClothes = props.dataCategory.clothes;

	const toggleClassActive = (e, selector = '.filter__wrapper') => {
		const elements = document.querySelectorAll(selector);
		const titles = document.querySelectorAll('.filter__title');
		elements.forEach((element, i) => {
			element.classList.toggle('active');
		})
	}

	return (
		<section className='category' onClick={(e) => toggleClassActive(e)}>
			<div className="container">
				<div className="category__wrapper">
					<div className="category__title">
						<img src="" alt="" />
						<h1>{props.dataCategory.name}</h1>
					</div>
					<div className="category__filter">
						<ul>
							<li onClick={(e) => toggleClassActive(e)}>
								<span className="filter__title">
									Сортувати
								</span>
								<div className="filter__wrapper">
									<span>популярні</span><br />
									<span>дешевше</span><br />
									<span>дорожче</span><br />
								</div>
							</li>
							<li onClick={(e) => toggleClassActive(e)}>
								<span className="filter__title">
									Ціна
								</span>
								<div className="filter__wrapper">

								</div>
							</li>
							<li onClick={(e) => toggleClassActive(e)}>
								<span className="filter__title">
									Сезон
								</span>
								<div className="filter__wrapper">
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="1" />
										<label className="form-check-label" htmlFor="1">
											<span>Зима</span>
										</label>
									</div>
									<div class="form-check">
										<input className="form-check-input" type="checkbox" value="" id="2" />
										<label className="form-check-label" htmlFor="2">
											<span>Літо</span>
										</label>
									</div>
									<div class="form-check">
										<input className="form-check-input" type="checkbox" value="" id="3" />
										<label className="form-check-label" htmlFor="3">
											<span>Осінь</span>
										</label>
									</div>
									<div class="form-check">
										<input className="form-check-input" type="checkbox" value="" id="4" />
										<label className="form-check-label" htmlFor="4">
											<span>Весна</span>
										</label>
									</div>
								</div>
							</li>
							<li onClick={(e) => toggleClassActive(e)}>
								<span className="filter__title">
									Розмір
								</span>
								<div className="filter__wrapper">

								</div>
							</li>
						</ul>
					</div>
					<div className="category__content">
						<div className="category__grid">
							{
								dataClothes.map((e, i) => {
									return (
										<div key={i + 100500} className="col">
											<ProductCard product={e} />
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CategoryPage;
