import './header.scss';

import { Outlet, Link } from "react-router-dom";
import basket from '../../assets/icons/bagget.png';
import olx from '../../assets/icons/Olx.png';
import inst from '../../assets/icons/Instagram.png';
import telg from '../../assets/icons/Telegram.png';
import face from '../../assets/icons/Facebook.png';


const Header = () => {

	const toggleClassActive = (selector) => {
		const elements = document.querySelectorAll(selector);
		elements.forEach(element => {
			element.classList.toggle('active');
		})
	}

	return (
		<header>
			<div className="container">
				<div className="header__wrapper">
					<div className="header__row">
						<div onClick={() => {
							toggleClassActive('.burgers');
							toggleClassActive('.dropdown__content');
						}} className="header__burger">
							<div className="burgers burger-1"></div>
							<div className="burgers burger-2"></div>
							<div className="burgers burger-3"></div>
						</div>
						<div className="header__search">
							<input type="text" placeholder='Пошук' />
							<div className="image" onClick={() => {
								toggleClassActive('.header__search');
								toggleClassActive('.image');
							}
							}></div>
						</div>
						<div className="header__logo">
							<Link to="/">
								Kanga.shop
							</Link>
						</div>
						<div className="header__basket">
							<figure>
								<img src={basket} alt="basket" />
								<div className="basket__counter">7</div>
							</figure>
						</div>
					</div>
					<div className="header__nav">
						<nav>
							<ul>
								<li><Link to="/">Головна</Link></li>
								<li className='dropdown'>
									<a onClick={() => toggleClassActive('.dropdown__content')}>Меню <span>⥥</span></a>
								</li>
								<li><Link to="/">Контакти</Link></li>
								<li><Link to="/">Соц.мережі</Link></li>
								<li><Link to="/condition">Оплата</Link></li>
							</ul>
						</nav>
					</div>
					<div className="dropdown__content">
						<div className="dropdown__content-wrapper">
							<ul>
								<li><Link to="/">Акції</Link></li>
								<li><Link to="/">Чоловічий одяг</Link></li>
								<li><Link to="/">Сукні</Link></li>
								<li><Link to="/">Спортивні костюми</Link></li>
								<li><Link to="/">Штани та спідниці</Link></li>
								<li><Link to="/">Футболки</Link></li>
							</ul>
							<ul>
								<li><Link to="/">Шорти</Link></li>
								<li><Link to="/">Верхній одяг</Link></li>
								<li><Link to="/">Светри</Link></li>
								<li><Link to="/">Піжами</Link></li>
								<li><Link to="/">Нижня білизна</Link></li>
								<li className='last-li' ><a href="">Sale</a></li>
							</ul>
						</div>

						<div className="dropdown__footer">
							<div className="dropdown-nav">
								<ul>
									<li><Link to="/">Головна</Link></li>
									<li><Link to="/">Відгуки</Link></li>
									<li><Link to="/condition">Способи оплати</Link></li>
								</ul>
							</div>
							<div className="dropdown__contacts-title">
								<span>Контакти:</span>
							</div>
							<div className="dropdown__contacts-wrapper">
								<a href="tel:+380980275819">+380-98-027-58-19</a>
								<p>пн-сб: з 9:00 до 20:00</p>
								<p>kanga-shop@gmail.com</p>
								<span>Ми в соц. мережах:</span>
								<ul>
									<li><a href=""><img src={olx} alt="" /></a></li>
									<li><a href=""><img src={inst} alt="" /></a></li>
									<li><a href=""><img src={telg} alt="" /></a></li>
									<li><a href=""><img src={face} alt="" /></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Outlet />
		</header >
	)
}

export default Header;