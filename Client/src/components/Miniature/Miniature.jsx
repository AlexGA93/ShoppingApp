import React,{useState} from 'react';
import { useSelector } from 'react-redux';

import './Miniature.scss';

const Miniature = () => {
    
    const stateProducts = useSelector(state => state.products);
    //console.log(typeof(stateProducts));

    
    const url = window.location.href.split("/");
    const productId = url[url.length-1];
    

    
    return (
        <div className="product-banner">
            <div className="product-banner__title">
                <h1>Product</h1>
                <hr />
            </div>
            <div className="product-banner__container">
                <div className="product-banner__container__img">
                    <img 
                    alt="John Doe"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-www.enfocus.com%2Fsites%2Fcombell-www.enfocus.com%2Ffiles%2Fmedia%2Fblog%2F2017-08-09-Lorem-Ipsum%2Florem-ipsum.jpg&f=1&nofb=1"
                    />
                </div>
                <div className="product-banner__container__name">
                    <h3>John Doe</h3>
                </div>
                <div className="product-banner__container__desc">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="product-banner__container__info">
                    <div className="product-banner__container__info_price">
                        <h2>$ 99.99</h2>
                    </div>
                    <div className="product-banner__container__info_stock">
                        <h2>Stock: 1</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Miniature
