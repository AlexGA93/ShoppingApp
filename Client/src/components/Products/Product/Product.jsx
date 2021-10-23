import React from 'react';
import Button from '@mui/material/Button';

import './Product.scss';

const Product = () => {
    return (
        <div className="product-container">
            <div className="product-container__img">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1eh9yux7w8iql.cloudfront.net%2Fproduct_images%2F129756_5a223bb9-37ca-49d6-86ac-82f25e444776.jpg&f=1&nofb=1" />
            </div>
            <div className="product-container__name">
                <p>Game Boy: Advance</p>
            </div>
            <div className="product-container__info">
                <div className="product-container__info__price">
                    <p>$ 300</p>
                </div>
                <div className="product-container__info__stock">
                    <p>Stock: 6</p>
                </div>
            </div>
            <div className="product-container__add">
                <Button variant="contained" color="secondary" endIcon={
                    <img src="https://img.icons8.com/wired/50/000000/add-tag.png"/>
                }>+add</Button>
            </div>
        </div>
    )
}

export default Product
