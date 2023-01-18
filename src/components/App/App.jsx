import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import ConditionsPage from "../СonditionsPage/Conditions";
import Basket from "../Basket/Basket";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Header />}>
					<Route path="/" element={<MainPage />}></Route>
					<Route path="/basket" element={<Basket />}></Route>
					<Route path="/condition" element={<ConditionsPage />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;