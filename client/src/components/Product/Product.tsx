import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import toast from 'react-hot-toast';

import {Button, Card, CardMedia, CardContent, CardActions, IconButton, Typography} from '@mui/material';

import {Favorite, Euro, Sell} from '@mui/icons-material';

import{actionCreators} from '../../Redux';
import { IAppState, IelementProduct } from '../../Redux/type';


import './Product.scss';



const Product: React.FC<{ className:string, key: string, id: string}> = (key): JSX.Element => {
    const {addToFavs, quitFromFavs, addToCart} = bindActionCreators(actionCreators, useDispatch());
    const stateInfo = useSelector<IAppState, IAppState['shopping']['products']>(state => state.shopping.products);
    
    const elementInfo = (stateInfo.find(element => element.id === key.id) as IelementProduct);
    console.log(elementInfo);
    
    
    const [favorite, setFavorite] = useState(elementInfo.favorite);

    const toggleAction = () => {
        if (favorite === 0) {
            setFavorite(1);
            addToFavs(elementInfo);
            toggleToast(`${elementInfo.title} added to Favorites!!`,'❤️');
            
            
        }else{
            setFavorite(0);
            quitFromFavs(elementInfo);
            toggleToast(`It seems that you don't like ${elementInfo.title} anymore`,'💔');
        }
        
    };
    const toggleToast = (message: string, icon: string): void => {
        toast(message,
        {
            icon: icon,
            style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            },
        }
        );
    };
    const toggleBuy = () => {
        addToCart(elementInfo); 
    };

    useEffect(() => {},[favorite, elementInfo.favorite])
    
    return (
        <Card className="product-container">
            <Link to={`/products/product/${elementInfo?.id}`} className="product-container_cardMedia">
                <CardMedia
                component="img"
                height="400"
                image= {elementInfo?.image}
                alt={elementInfo?.title}
                />
            </Link>

            <CardContent className="product-container_cardContent">
                <Typography  paragraph>
                    {elementInfo?.title}
                </Typography>
            </CardContent>

            <CardActions disableSpacing className="product-container_cardAction">
                <IconButton 
                    aria-label="euro"
                    className="product-container_cardAction_euroButton"
                >
                    <Euro />:{elementInfo?.price}
                </IconButton>

                <IconButton 
                    aria-label="add to favorites" 
                    onClick={() => toggleAction()}
                    className="product-container_cardAction_favButton"
                    >
                    <Favorite style={favorite === 1 ? {color: 'red'} : {}} />
                </IconButton>
                
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className="product-container_cardAction_sellButton"
                    startIcon={<Sell />}
                    onClick={toggleBuy}
                    style={{backgroundColor: '#48618b'}}
                >
                    Buy!
                </Button>
            </CardActions>
        </Card>
    )
}

export default Product;