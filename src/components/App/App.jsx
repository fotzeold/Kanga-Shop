import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainPage from "../MainPage/MainPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import ConditionsPage from "../СonditionsPage/Conditions";
import Basket from "../Basket/Basket";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import KangaServices from '../../services/KangaServices';
import { useEffect, useState } from 'react';

const App = () => {
	const [dataBase, setDataBase] = useState(null);

	useEffect(() => {
		KangaServices()
			.then(data => setDataBase(data))
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Header dataBase={dataBase} />}>
					<Route path="/" element={<MainPage dataBase={dataBase} />}></Route>
					{
						dataBase ?
							dataBase.map((category, i) => {
								return (
									<Route key={`route-${i + 1}`} path={`/category/${category.url}`} element={<CategoryPage dataCategory={category} />}></Route>
								)
							})
							: null
					}
					<Route path="/condition" element={<ConditionsPage />}></Route>
				</Route>
			</Routes>
			<Basket />
			<Footer />
		</BrowserRouter>
	)
}

export default App;