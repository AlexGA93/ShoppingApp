import React from 'react';
import Button from '@mui/material/Button';

import {connect} from 'react-redux';

import './Product.scss';

const Product = (props) => {
    const {favorite, id, image_url, price, productDescription, productName, stock} = props.item;
    // console.log('patata');
    //console.log(props.item);
    return (
        <div className="product-container">
            <div className="product-container__img">
                <img alt={productName} src={image_url} />
            </div>
            <div className="product-container__name">
                <p>{productName}</p>
            </div>
            <div className="product-container__info">
                <div className="product-container__info__price">
                    <p>$ {price}</p>
                </div>
                <div className="product-container__info__stock">
                    <p>Stock: {stock}</p>
                </div>
            </div>
            <div className="product-container__add">
                <Button variant="contained" color="secondary" endIcon={
                    <img alt="" src="https://img.icons8.com/wired/50/000000/add-tag.png"/>
                }>+add</Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    product: state.product
})


export default connect(mapStateToProps)(Product);
