import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { elementProduct } from '../../Redux/type';

import EuroIcon from '@mui/icons-material/Euro';

import './productInfo.scss';

const ProductInfo = () => {
    // extract id from state
    let stateProducts = useSelector<RootStateOrAny, elementProduct[]>((state) => state.products);
    
    let product = stateProducts.find((element) => element.id===window.location.pathname.split("/").pop());
    // console.log(product);
    
    return (
        <div className='product-info'>
            <div className="product-info__container">
                <div className="product-info__container_title">
                    {product?.productName}
                </div>
                <div className="product-info__container_media">
                    <div className="product-info__container_media_image">
                        <img alt="product_image" src={product?.image_url}/>
                    </div>
                    <div className="product-info__container_media_data">
                        <div className="product-info__container_media_data_price">
                            PRICE: {product?.price} <EuroIcon />
                        </div>
                        <div className="product-info__container_media_data_stock">
                            STOCK: {product?.stock} uds.
                        </div>
                        <div className="product-info__container_media_data_favs">
                            {product?.favorite ? (<FavoriteIcon style={{color: 'red'}} fontSize="large"/>) : (<FavoriteIcon fontSize="large"/>)}
                        </div>
                    </div>
                    
                </div>
                <div className="product-info__container_bio">
                    {product?.productDescription}
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
