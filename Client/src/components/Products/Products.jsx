import React from 'react';
import {useSelector} from 'react-redux';


// component Navbar
import Product from './Product/Product';

import './Products.scss';

const Products = () => {
    //access to the state
    const stateProducts = useSelector(state => state.products);
    
    var products = [];
    for(var productElement in stateProducts){
        products.push(stateProducts[productElement]);
    }
    

    return (
        <div className="products">
            <div className="products__title">
                <h1>Product List</h1>
                <hr />
            </div>
            <div className="products__list">
                {
                products.map(item =>  <Product key={item.id} item={item} />)}
            </div>
        </div>
    )
}



export default Products;
