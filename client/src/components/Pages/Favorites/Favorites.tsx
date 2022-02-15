import {useSelector} from 'react-redux'
import { IAppState, IelementProduct } from '../../../Redux/type';
import Product from '../../Product/Product';

import './Favorites.scss';

const Favorites = (): JSX.Element => {

    const stateFavs = useSelector<IAppState, IAppState['shopping']['favs']>(state => state.shopping.favs);
    
    return (
        <div className='favorites'>
            
             <div className="favorites__title">
                <h1>Favorites</h1>
                <hr />
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
