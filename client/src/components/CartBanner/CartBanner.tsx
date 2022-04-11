import React, {useState} from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';

import './CartBanner.scss';

const CartBanner = (props: any):JSX.Element => {

    let [counter, setCounter] = useState<number>(1);

    // console.log(props.element);

    // const toggleQtyAdd = () => {
    //     setCounter(counter++);
    // };
    // const toggleQtyRemove = () => {
    //     setCounter(counter--);
    // };

    const {
        id, 
        image_url, 
        stock, 
        productName,
        price,
        productDescription,
        favorite,
        qty
    } = props.element;

    return (
        <Card sx={{ height: 350, maxWidth: 700 }} className="cartBanner-container">
            <div className="cartBanner-conatiner_bannerMedia">
               <CardMedia
               component="img"
               height="200"
               image= {image_url}
               alt={productName}
               />
            </div>
            
            <CardContent 
                className="product-container_cardContent" 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}
            >

                <Typography
                    sx={{ width: '50%' }} 
                    className="product-container_cardContent_name"
                    variant="h6" 
                    paragraph
                >
                    {productName}
                </Typography>
                <Typography 
                    sx={{ fontSize: 30, fontWeight: 'bold', width: '25%' }}
                    className="product-container_cardContent_price" 
                    variant="body2" 
                    gutterBottom
                >
                    {price}$
                </Typography>
            </CardContent>

            <CardContent
            className="cartBanner-container_buttons" 
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly'
            }}>
                
                <button onClick={() => setCounter(counter++)}>+1</button>
                { counter }
                <button onClick={() => setCounter(counter--)}>-1</button>
                
            </CardContent>
            
        </Card>
  )
}

export default CartBanner