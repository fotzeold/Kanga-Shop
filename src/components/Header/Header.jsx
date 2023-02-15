import RoutingToTop from '../../hooks/RoutingToTop';

import './header.scss';

import { Outlet, Link } from "react-router-dom";
import basket from '../../assets/icons/bagget.png';
import olx from '../../assets/icons/Olx.png';
import inst from '../../assets/icons/Instagram.png';
import telg from '../../assets/icons/Telegram.png';
import face from '../../assets/icons/Facebook.png';

const Header = () => {
	RoutingToTop()

	const back = document.querySelector('.dropdown__background');

	const toggleClassActive = (selector) => {
		const elements = document.querySelectorAll(selector);
		elements.forEach(element => {
			element.classList.toggle('active');
		})
	}

	const openDropDown = () => {
		back.classList.toggle('active');
		toggleClassActive('.dropdown__content');
	}

	const closeDropDown = () => {
		document.querySelector('.dropdown__content').classList.remove('active');
		document.querySelectorAll('.burgers').forEach(e => e.classList.remove('active'));
		back.classList.remove('active');

	}

	const removeDropDown = (e) => {
		const selector = document.querySelector('.dropdown__content');
		if (e.target !== selector) {
			closeDropDown();
		}
	}

	return (
		<>
			<header>
				<div className="container">
					<div className="header__wrapper">
						<div className="header__row">
							<div className="header__burger"
								onClick={() => {
									toggleClassActive('.burgers');
									toggleClassActive('.dropdown__content');
								}}>
								<div className="burgers burger-1"></div>
								<div className="burgers burger-2"></div>
								<div className="burgers burger-3"></div>
							</div>
							<div className="header__search">
								<input onClick={() => closeDropDown()} type="text" placeholder='Пошук' />
								<div className="image" onClick={() => {
									toggleClassActive('.header__search');
									toggleClassActive('.image');
								}
								}></div>
							</div>
							<div className="header__logo">
								<Link onClick={() => closeDropDown()} to="/">
									Kanga.shop
								</Link>
							</div>
							<div className="header__basket">
								<figure onClick={() => closeDropDown()}>
									<img src={basket} alt="basket" />
									<div className="basket__counter">7</div>
								</figure>
							</div>
						</div>
						<div className="header__nav">
							<nav>
								<ul>
									<li><Link onClick={() => closeDropDown()} to="/">Головна</Link></li>
									<li className='dropdown'>
										<a onClick={() => openDropDown()}>Меню <span>⥥</span></a>
									</li>
									<li><a onClick={() => closeDropDown()} href="#yak-contact">Контакти</a></li>
									<li><Link onClick={() => closeDropDown()} to="/">Соц.мережі</Link></li>
									<li><Link onClick={() => closeDropDown()} to="/condition">Оплата</Link></li>
								</ul>
							</nav>
						</div>
						<div className="dropdown__content">
							<div className="dropdown__content-wrapper">
								<ul>
									<li><Link onClick={() => closeDropDown()} to="/">Хіти продажів</Link></li>
									<li><Link onClick={() => closeDropDown()} to={`/category/costume`}>Костюми</Link></li>
									<li><Link onClick={() => closeDropDown()} to={`/category/dress`}>Сукні</Link></li>
									<li><Link onClick={() => closeDropDown()} to={`/category/pijamas`}>Піжами</Link></li>
									<li><Link onClick={() => closeDropDown()} to={`/category/jackets`}>Верхній одяг</Link></li>
									<li><Link onClick={() => closeDropDown()} to={`/category/sport-costume`}>Спортивні костюми</Link></li>
									<li><Link onClick={() => closeDropDown()} to={`/category/blouses`}>Блузки</Link></li>
								</ul>
								<ul>
									<li><Link onClick={() => closeDropDown()} to={`/category/man-clothes`}>Чоловічий одяг</Link></li>
									<li><Link onClick={() => closeDropDown()} to={`/category/shorts`}>Шорти</Link></li>
									<li><Link onClick={() => closeDropDown()} to={`/category/t-shirts`}>Футболки</Link></li>
									<li><Link onClick={() => closeDropDown()} to={`/category/pants`}>Штани</Link></li>
									<li><Link onClick={() => closeDropDown()} to={`/category/sweaters`}>Светри</Link></li>
									<li><Link onClick={() => closeDropDown()} to={`/category/under-dress`}>Спідниці</Link></li>
									<li className='last-li' ><a onClick={() => closeDropDown()} href="">Акції</a></li>
								</ul>
							</div>

							<div className="dropdown__footer">
								<div className="dropdown-nav">
									<ul>
										<li><Link onClick={() => closeDropDown()} to="/">Головна</Link></li>
										<li><Link onClick={() => closeDropDown()} to="/">Відгуки</Link></li>
										<li><Link onClick={() => closeDropDown()} to="/condition">Способи оплати</Link></li>
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
			<div onClick={(e) => removeDropDown(e)} className="dropdown__background"></div>
		</>
	)

}

export default Header;
