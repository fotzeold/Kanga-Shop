import { useEffect, useState } from 'react';
import MainSlider from './components/MainSlider/MainSlider';
import Tabs from './components/Tabs/Tabs';
import KangaServices from '../../services/KangaServices';

import './main-page.scss';

const MainPage = () => {
	const [dataBase, setDataBase] = useState(null);

	useEffect(() => {
		KangaServices()
			.then(data => setDataBase(data));
	}, []);

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