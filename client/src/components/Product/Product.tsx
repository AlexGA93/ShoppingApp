import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import{actionCreators} from '../../Redux';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import EuroIcon from '@mui/icons-material/Euro';
import SellIcon from '@mui/icons-material/Sell';

import { IAppState, IelementProduct } from '../../Redux/type';
import toast from 'react-hot-toast';

import './Product.scss';



const Product = (props: any): JSX.Element => {
    const {addToFavs, quitFromFavs, addToCart} = bindActionCreators(actionCreators, useDispatch());
    const stateInfo = useSelector<IAppState, IAppState['shopping']['products']>(state => state.shopping.products);
    const elementInfo = (stateInfo.find(element => element.id === props.id) as IelementProduct)
    
    const [favorite, setFavorite] = useState(elementInfo.favorite);

    const toggleAction = () => {
        if (favorite === 0) {
            setFavorite(1);
            addToFavs(elementInfo);
            toggleToast(`${elementInfo.productName} added to Favorites!!`,'❤️');
            
            
        }else{
            setFavorite(0);
            quitFromFavs(elementInfo);
            toggleToast(`It seems that you don't like ${elementInfo.productName} anymore`,'💔');
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
        // console.log(elementInfo); 
    };

    useEffect(() => {},[favorite, elementInfo.favorite])
    
    return (
        <Card sx={{ maxWidth: 500 }} className="product-container">
            <Link to={`/products/product/${elementInfo?.id}`} className="product-container_cardMedia">
                <CardMedia
                component="img"
                height="250"
                image= {elementInfo?.image_url}
                alt={elementInfo?.productName}
                />
            </Link>

            <CardContent className="product-container_cardContent">
                <Typography  paragraph>
                    {elementInfo?.productName}
                </Typography>
            </CardContent>

            <CardActions disableSpacing className="product-container_cardAction">
                <IconButton 
                    aria-label="euro"
                    className="product-container_cardAction_euroButton"
                >
                    <EuroIcon />:{elementInfo?.price}
                </IconButton>

                <IconButton 
                    aria-label="add to favorites" 
                    onClick={() => toggleAction()}
                    className="product-container_cardAction_favButton"
                    >
                    <FavoriteIcon style={favorite === 1 ? {color: 'red'} : {}} />
                </IconButton>
                
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className="product-container_cardAction_sellButton"
                    startIcon={<SellIcon />}
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