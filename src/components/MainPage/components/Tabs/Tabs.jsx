import { useState } from 'react';

import './tabs.scss';

const Tabs = () => {
	const [tab, setTab] = useState(2);

	const renderTab = () => {
		switch (tab) {
			case 1:
				return (<View1 />)
			case 2:
				return (<View2 />)
			case 3:
				return (<View3 />)
			default:
				break;
		}
	}


	return (
		<div className="tabs">
			<div className="tabs__buttons">
				<div className="tabs__row">
					<div
						className="t__button t-btn-1"
						onClick={() => setTab(1)}
					>
						<span>Товар місяця</span>
					</div>
					<div
						className="t__button t-btn-2"
						onClick={() => setTab(2)}
					>
						<span>Хіти продажів</span>
					</div>
					<div
						className="t__button t-btn-3"
						onClick={() => setTab(3)}
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

const View1 = () => {
	return (
		<>
			wdfwf
		</>
	)
}

const View2 = () => {
	return (
		<>
			wdfwfew
		</>
	)
}

const View3 = () => {
	return (
		<>
			sdfsfrhrthrthsf
		</>
	)
}

export default Tabs;