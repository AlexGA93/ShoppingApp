import React from 'react';
import {useSelector} from 'react-redux';


// component Navbar
import Product from './Product/Product';

import './Products.scss';

const Products = () => {
    //access to the state
    const products = useSelector(state => state.products);
    console.log(products);

    return (
        <div className="products">
            <div className="products__title">
                <h1>Product List</h1>
            </div>
            {/* <div className="products__list">
                {products.map(
                    item => <Product key={item.id} item={item} />
                )}
            </div> */}
            <div className="products__list">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            

        </div>
    )
}



export default Products;
