import './MainCategory.scss';
import man from '../../../../assets/mainCategory/man-min.png';
import { Link, Outlet } from 'react-router-dom';

const MainCategory = (props) => {

	if (props.dataBase) {
		return (
			<section className='main-categorys'>
				<div className="main-categorys__wrapper">
					{
						props.dataBase.map((e, i) => {
							return (
								<div className="category" key={'main-category' + i}>
									<Link to={'category/' + e.url} className='category-link' href="">
										<img src={man} alt="" />
										<span>{e.name}</span>
									</Link>
								</div>
							)
						})
					}
				</div>
			</section>
		)
	}
}

export default MainCategory;