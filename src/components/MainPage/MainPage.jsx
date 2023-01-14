import MainSlider from './components/MainSlider/MainSlider';
import Tabs from './components/Tabs/Tabs';

import './main-page.scss';

const MainPage = () => {
	return (
		<main>
			<div className="container">
				<MainSlider />
				<Tabs />
			</div>
		</main>
	)
}

export default MainPage;