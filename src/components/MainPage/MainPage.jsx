import MainSlider from './components/MainSlider/MainSlider';
import Tabs from './components/Tabs/Tabs';
import MainBanner from './components/MainBanner/MainBanner';
import MainCategory from './components/MainCategory/MainCategory';

import './main-page.scss';

const MainPage = (props) => {
	const dataBase = props.dataBase;

	return (
		<main>
			<div className="container">
				<MainSlider />
				<Tabs dataBase={dataBase} />
				<MainBanner />
				<MainCategory dataBase={dataBase} />
			</div>
		</main>
	)
}

export default MainPage;