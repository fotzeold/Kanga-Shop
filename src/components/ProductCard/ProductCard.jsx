import './product-card.scss';

const ProductCard = (props) => {
	const { name, price, markHot, markSale } = props.product;

	return (
		<div className="product__card">
			<a href="#">
				<img src="" alt="" width="230px" height="325px" />
				<div className="markers">
					{markHot ? <div className='markHot'>Топ продажів</div> : null}
					{markSale ? <div className='markSale'>-{markSale}%</div> : null}
				</div>
				<h5>{name}</h5>
				{markSale
					?
					<>
						<span className='after-price'>{price - Math.floor(price * (markSale / 100))} грн</span>
						<s className='before-price'>{price} грн</s>
					</>
					: <span>{price} грн</span>
				}
			</a>
		</div>
	)
}

export default ProductCard;