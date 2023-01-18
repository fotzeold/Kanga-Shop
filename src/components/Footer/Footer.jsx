import './footer.scss';
import { Outlet, Link } from "react-router-dom";
import olx from '../../assets/icons/Olx.png';
import inst from '../../assets/icons/Instagram.png';
import telg from '../../assets/icons/Telegram.png';
import face from '../../assets/icons/Facebook.png';

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer-row">
					<div className="footer__nav">
						<ul>
							<li><Link to="/">Головна</Link></li>
							<li><Link to="/condition">Умови та оплата</Link></li>
							<li>пн-сб: з 9:00 до 20:00</li>
						</ul>
					</div>
					<div className="footer__social">
						<span>Ми в соц. мережах:</span>
						<ul>
							<li><a href=""><img src={olx} alt="" /></a></li>
							<li><a href=""><img src={inst} alt="" /></a></li>
							<li><a href=""><img src={telg} alt="" /></a></li>
							<li><a href=""><img src={face} alt="" /></a></li>
						</ul>
						<p>© 2022 | forzeold</p>
					</div>
					<div className="footer__contacts-wrapper">
						<ul>
							<li>Контакти:</li>
							<li><a href="tel:+380980275819">+380-98-027-58-19</a></li>
							<li>kangashop@gmail.com</li>
						</ul>
					</div>
				</div>
				<Outlet />
			</div>
		</footer>
	)
}

export default Footer;