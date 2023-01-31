import MainSlider from './components/MainSlider/MainSlider';
import Tabs from './components/Tabs/Tabs';

import './main-page.scss';

const MainPage = (props) => {
	const dataBase = props.dataBase;

	return (
		<main>
			<div className="container">
				<MainSlider />
				<Tabs dataBase={dataBase} />
			</div>
		</main>
	)
}

export default MainPage;