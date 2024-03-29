import { useState } from 'react';
import ProductHead from '../../../ProductHead/ProductHead';
import ProductSlider from '../../../ProductSlider/ProductSlider';

import './tabs.scss';

const Tabs = (props) => {
	const [tab, setTab] = useState(1);
	const { dataBase } = props;

	const renderTab = () => {
		switch (tab) {
			case 1:
				return (<View1 dataBase={dataBase} />)
			case 2:
				return (<View2 dataBase={dataBase} />)
			case 3:
				return (<View3 dataBase={dataBase} />)
			default:
				break;
		}
	}

	const togglerActive = (num) => {
		const btns = document.querySelectorAll('.t__button');
		btns.forEach(e => e.classList.remove('active'));
		btns[num - 1].classList.add('active');
	}

	const togglerBtn = (num) => {
		togglerActive(num);
		setTab(num)
	}

	const togglerBtnNext = (tab) => {
		if (tab == 3) {
			setTab(1)
			togglerActive(1)
		} else {
			setTab(tab => tab + 1)
			togglerActive(tab + 1)
		}
	}

	const togglerBtnPrev = (tab) => {
		if (tab == 1) {
			setTab(3)
			togglerActive(3)
		} else {
			setTab(tab => tab - 1)
			togglerActive(tab - 1)
		}
	}

	return (
		<div className="tabs">
			<div className="tabs__buttons">
				<div className="tabs__row">
					<button
						onClick={() => togglerBtnPrev(tab)}
						className='tabs-toggler toggler-prev'
					>&#129064;</button>
					<div
						className={`t__button t-btn-1 active`}
						onClick={() => {
							togglerBtn(1);
						}}
					>
						<span>Товар місяця</span>
					</div>
					<div
						className={`t__button t-btn-2`}
						onClick={() => {
							togglerBtn(2);
						}}
					>
						<span>Хіти продажів</span>
					</div>
					<div
						className={`t__button t-btn-3`}
						onClick={() => {
							togglerBtn(3);
						}}
					>
						<span>Акції</span>
					</div>
					<button
						className='tabs-toggler toggler-next'
						onClick={() => togglerBtnNext(tab)}
					>&#129058;</button>
				</div>
			</div>
			<div className="tabs__content">
				{renderTab()}
			</div>
		</div>
	)
}

const View1 = (props) => {
	const { dataBase } = props;

	if (dataBase) {
		return (
			<div className="tab-1 tab">
				<ProductHead dataBase={dataBase} />
			</div>
		)
	}
}

const View2 = (props) => {
	const { dataBase } = props;

	const hotProduct = () => {
		const hots = [];
		dataBase.forEach(category => {
			category.clothes.forEach(clothe => {
				if (clothe.markHot) {
					hots.push(clothe)
				}
			})
		})
		return hots;
	}

	if (dataBase) {
		return (
			<div className="tab-2 tab">
				<ProductSlider dataBase={hotProduct()} />
			</div>
		)
	}
}

const View3 = (props) => {
	const { dataBase } = props;

	const promoProduct = () => {
		const promo = [];
		dataBase.forEach(category => {
			category.clothes.forEach(clothe => {
				if (clothe.markSale != 0) {
					promo.push(clothe)
				}
			})
		})
		return promo;
	}

	if (dataBase) {
		return (
			<div className="tab-3 tab">
				<ProductSlider dataBase={promoProduct()} />
			</div>
		)
	}
}

export default Tabs;