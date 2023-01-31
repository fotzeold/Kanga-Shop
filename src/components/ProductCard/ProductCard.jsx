import './product-card.scss';

const ProductCard = (props) => {
	const { name, price } = props.product;

	return (
		<div className="product__card">
			<a href="#">
				<img src="" alt="" width="230px" height="325px" />
				<h5>{name}</h5>
				<span>{price} грн</span>
			</a>
		</div>
	)
}

export default ProductCard;