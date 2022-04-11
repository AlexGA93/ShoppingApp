import {useSelector} from 'react-redux';
import { IAppState, IelementProduct } from '../../../Redux/type';

import Axes from '../../../media/img/axes.png';

import Product from '../../Product/Product';

import './Favorites.scss';

const Favorites = (): JSX.Element => {

    const stateFavs = useSelector<IAppState, IAppState['shopping']['favs']>(state => state.shopping.favs);
    
    return (
        <div className='favorites'>
            <div className="favorites_title">
                <img alt="axes" src={Axes} style={{width:'60px'}}/>
                <h3>Favorites</h3>
                <img alt="axes" src={Axes} style={{width:'60px'}}/>
            </div>
            
            
            <div className="favorites__list">
            {
                stateFavs && stateFavs.length!==0 ? (
                    stateFavs.map((element: IelementProduct) => (
                        <Product className="products__list_element" key={element.id} id={element.id} />
                    ))
                ):(
                    <h2>It seems that there's nothing here...</h2>
                )
            }
            </div>
        </div>
    )
}

export default Favorites
