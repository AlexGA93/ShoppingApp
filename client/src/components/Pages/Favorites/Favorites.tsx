import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { IAppState, IelementProduct } from '../../../Redux/type';

// imgs
import Axes from '../../../media/img/axes.png';

// modules
import Product from '../../Product/Product';

import './Favorites.scss';
import LoadingComponent from '../../Loading/LoadingComponent';


const Favorites = (): JSX.Element => {

    const stateFavs = useSelector<IAppState, IAppState['shopping']['favs']>(state => state.shopping.favs);

    return (
        stateFavs.length !==0 ? (
            <div className='favorites'>
                <div className="favorites_title">
                    <img alt="axes" src={Axes} style={{width:'60px'}}/>
                    <h3>Favorites</h3>
                    <img alt="axes" src={Axes} style={{width:'60px'}}/>
                </div>
                
                
                <div className="favorites__list">
                {
                    stateFavs.map((element: IelementProduct) => (
                        <Product className="products__list_element" key={element.id} id={element.id} />
                    ))
                    // stateFavs && stateFavs.length!==0 ? (
                    //     stateFavs.map((element: IelementProduct) => (
                    //         <Product className="products__list_element" key={element.id} id={element.id} />
                    //     ))
                    // ):(
                    //     <h2>It seems that there's nothing here...</h2>
                    // )
                }
                </div>
            </div>
    ):(
        <>
            <h2>It seems that there's nothing here...</h2>
            <LoadingComponent />
        </>
    )
    )
}

export default Favorites
