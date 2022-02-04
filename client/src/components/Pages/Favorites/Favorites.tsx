import React, { useEffect } from 'react'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'
import { rootStore } from '../../../Redux';
import { getAllFavs } from '../../../Redux/actions/shopping';
import { IAppState, IelementProduct } from '../../../Redux/type';
import Product from '../../Product/Product';

import './Favorites.scss';

const Favorites = (): JSX.Element => {

    // const stateFavs = useSelector((state: rootStore) => state.shopping?.favs);
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
                        <Product className="products__list_element" key={element.id} element={element} />
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
