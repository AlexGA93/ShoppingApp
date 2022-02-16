
import HelmetIcon from '../../media/img/helmet.png';
import {Link} from 'react-router-dom';
import './NavbarComponent.scss';
import { useSelector } from 'react-redux';

// icons
import Cart from '../../media/icon/cart.png';
import Heart from '../../media/icon/favorite.png';
import Store from '../../media/icon/online-store.png';
import { IAppState } from '../../Redux/type';



const NavbarComponent = (): JSX.Element => {
  // If there is favs in array state render length array
  const favsCounter = useSelector<IAppState, IAppState['shopping']['favs']>(state => state.shopping.favs);
  console.log(favsCounter);
  // If there is cart in array state render length array
  const cartCounter = useSelector<IAppState, IAppState['shopping']['cart']>(state => state.shopping.cart);

    return (
      <div className='container'>
        <div className='container__name'>
          {/* logo and Name */}
          <img src={HelmetIcon} alt='helmet icon'/>
          <h2>Vikingz</h2>
        </div>
        {/* search section */}
        {/* links section */}
        <nav className='container__links'>
          <ul>
              <Link className='nav-link' to="/cart">
              <img src={Store} alt='cart icon'/>
              </Link>
          </ul>
          <ul>
            <Link className='nav-link' to="/cart">
              <img src={Heart} alt='cart icon'/>
              </Link>
            <div className='favs'>
            {
              favsCounter.length > 0 ? (
                <span className="favs_counter">
                  <p className='favs_counter__data'>{favsCounter.length}</p>
                </span>
              ) : null
            }
            </div>
          </ul>
          <ul>
            <Link className='nav-link' to="/cart">
              <img src={Cart} alt='cart icon'/>
            </Link>
            <div className='cart'>
            {
              cartCounter.length > 0 ? (
                <span className="cart_counter">
                  <p className='cart_counter__data'>{cartCounter.length}</p>
                </span>
              ) : null
            }
            </div>
          </ul>
        </nav>
      </div>
    )
}

export default NavbarComponent