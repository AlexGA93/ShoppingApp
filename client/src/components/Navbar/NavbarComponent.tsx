
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IAppState } from '../../Redux/type';

// icons
import Cart from '../../media/icon/icons8-cart-64.png';
import Heart from '../../media/icon/icons8-heart-puzzle-64.png';
import Store from '../../media/icon/icons8-store-64.png';

// imgs
import HelmetIcon from '../../media/img/helmet.png';

import './NavbarComponent.scss';

const NavbarComponent = (): JSX.Element => {
  // If there is favs in array state render length array
  const favsCounter = useSelector<IAppState, IAppState['shopping']['favs']>(state => state.shopping.favs);
  // If there is cart in array state render length array
  const cartCounter = useSelector<IAppState, IAppState['shopping']['cart']>(state => state.shopping.cart);

  // Use hook to deal with life cycle
  useEffect(() => {}, [favsCounter, cartCounter]);

  return (
    <div className='container'>
      <div className='container__name'>
        {/* logo and Name */}
        <img src={HelmetIcon} alt='helmet icon' />
        <Link className='nav-link' to="/">
          <h2>Vikingz</h2>
        </Link>
      </div>
      {/* search section */}
      
      {/* links section */}
      <nav className='container__links'>
        <ul>
          <Link className='nav-link' to="/store">
            <img src={Store} alt='cart icon' />
          </Link>
        </ul>
        <ul>
          <Link className='nav-link' to="/favorites">
            <img src={Heart} alt='cart icon' />
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
            <img src={Cart} alt='cart icon' />
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