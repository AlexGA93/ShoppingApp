// modules
import Store from '../Store/Store';

// imgs
import Axes from '../../../media/img/axes.png';

import './MainPage.scss';

const MainPage = (): JSX.Element => {
  return (
    <div className="products">
        <div className="products_title">
            <img alt="axes" src={Axes} style={{width:'60px'}}/>
            <h3>Product List</h3>
            <img alt="axes" src={Axes} style={{width:'60px'}}/>
        </div>
        <Store />
    </div>
  )
}

export default MainPage