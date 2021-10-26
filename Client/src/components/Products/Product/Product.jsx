import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';

import { ReactComponent as YourSvg } from '../../../assets/img/heart.svg';

import {connect} from 'react-redux';

import './Product.scss';

const Product = (props) => {
    const [isOutStock, setIsOutStock] = useState(false)
    const {favorite, id, image_url, price, productDescription, productName, stock} = props.item;
    // console.log('patata');
    // console.log(props);

    const addProductToCart = () => {
        toast.dark("Product added to the cart!");
        //if(item.stock!==0) addToCart({id, image_url, price, productName,stock })
    }
    const addToFavorites = () => {
        toast.dark("Product added to the favorite list!");
        //addToFavs({item});
    }
    const quitToFavs = () => {
        toast.dark("Product eliminated from the favorite list!")
        //outOfFavs({item});
    }


    return (
        <div className="product-container">
            <div className="product-container__img">
                <Link to={`/products/${id}`}>
                    <img className="product-container__img__url" alt={productName} src={image_url} />
                </Link>
            </div>
            <div className="product-container__name">
                <p>{productName}</p>
            </div>
            <div className="product-container__info">
                <div className="product-container__info__price">
                    {stock>0 ? <p>${price}</p>:null}
                </div>
                <div className="product-container__info__stock">
                    {stock>0 ? (
                        <p>Stock: {stock}</p>
                    ):(
                        <p className="product-container__info__stock_out">Out of Stock</p>
                    )}
                </div>
            </div>
            <div className="product-container__add">
                <Button onClick={
                    props.item.favorite!=="1" ? (addToFavorites) : (quitToFavs)
                    }>
                    <YourSvg className="product-container__img__heart" style={
                        props.item.favorite==="1" ? {color: 'red'}:{color: 'black'}
                    } alt="Heart Logo" />
                </Button>
                <Button 
                onClick={addProductToCart}
                variant="contained" 
                color="secondary" 
                endIcon={
                    <img alt="" src="https://img.icons8.com/wired/50/000000/add-tag.png"/>
                }
                
                >+add</Button>
                
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    product: state.product
})


export default connect(mapStateToProps)(Product);
