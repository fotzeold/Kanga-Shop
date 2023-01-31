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

	const toggler = (num) => {
		setTab(num);
		const btns = document.querySelectorAll('.t__button');
		btns.forEach(e => e.classList.remove('active'));
		btns[num - 1].classList.add('active');
	}

	return (
		<div className="tabs">
			<div className="tabs__buttons">
				<div className="tabs__row">
					<div
						className={`t__button t-btn-1 active`}
						onClick={() => {
							toggler(1);
						}}
					>
						<span>Товар місяця</span>
					</div>
					<div
						className={`t__button t-btn-2`}
						onClick={() => {
							toggler(2);
						}}
					>
						<span>Хіти продажів</span>
					</div>
					<div
						className={`t__button t-btn-3`}
						onClick={() => {
							toggler(3);
						}}
					>
						<span>Акції</span>
					</div>
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

	if (dataBase) {
		return (
			<div className="tab-2 tab">
				<ProductSlider dataBase={dataBase} />
			</div>
		)
	}
}

const View3 = (props) => {
	const { dataBase } = props;

	if (dataBase) {
		return (
			<>
				<div>{dataBase[0].clothes[0].name}</div>
			</>
		)
	}
}

export default Tabs;