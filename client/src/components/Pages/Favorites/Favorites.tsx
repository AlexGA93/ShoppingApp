import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { elementProduct } from '../../../Redux/type';
import Product from '../../Product/Product';

import './Favorites.scss';

const Favorites = (): JSX.Element => {

    const favs: elementProduct[] = [];

    const stateProducts = useSelector<RootStateOrAny, elementProduct[]>((state) => state.products);

    stateProducts.map(product =>{if ( product.favorite === 1) favs.push(product)});
    
    return (
        <div className='favorites'>
            <div className="favorites__title">
                <h1>Favorites</h1>
                <hr />
            </div>
            <div className="favorites__list">
            {
                favs.length !==0 ? (
                    favs.map(element => (
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
