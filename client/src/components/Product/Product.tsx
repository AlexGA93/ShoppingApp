import React from 'react';
import { bindActionCreators } from 'redux';
import {useDispatch} from 'react-redux';
import {Link} from "react-router-dom";

// import {addToCart, addToFavs, outOfFavs} from '../../actions/shopping';
// import { addToFavs, quitFromFavs } from '../../Redux/actions/shopping';
import{actionCreators} from '../../Redux/index';

// import Button from '@material-ui/core/Button';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import ShareIcon from '@mui/icons-material/Share';
import EuroIcon from '@mui/icons-material/Euro';
import SellIcon from '@mui/icons-material/Sell';

import './Product.scss';

import { IelementProduct } from '../../Redux/type';
import toast from 'react-hot-toast';
//import { color } from '@mui/system';




const Product = (props: any): JSX.Element => {
    let element: IelementProduct = props.element;
    //extract element details const {favorite, id, image_url, price, productDescription, productName, stock } = element.element;

    const {addToFavs} = bindActionCreators(actionCreators, useDispatch()); //, quitFromFavs, addToCart

    const addToFavsMethod = (name: string): void => {
        toast(`${name} added to Favorites!!`,
        {
            icon: '❤',
            style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            },
        }
        );
        addToFavs(element);
    };
    const removeToFavsMethod = (name: string): void => {
        toast(`It seems that you don't like ${name} anymore`,
        {
            icon: '💔',
            style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            },
        }
        );
        // quitFromFavs(element);
    };

    const toggleBuy = () => {
        // addToCart(element);
    };
    
    return (
        <Card sx={{ maxWidth: 500 }} className="product-container">
            <Link to={`/products/product/${element.id}`} className="product-container_cardMedia">
                <CardMedia
                component="img"
                height="194"
                image= {element.image_url}
                alt={element.productName}
                />
            </Link>
            <CardContent className="product-container_cardContent">
                <Typography  paragraph>
                    {element.productName}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className="product-container_cardAction">
                <IconButton 
                    aria-label="add to favorites" 
                    onClick={element.favorite===1 ? (
                            () =>removeToFavsMethod(element.productName)
                        ):(
                            () => addToFavsMethod(element.productName)
                        )
                    }
                    className="product-container_cardAction_favButton"
                    >
                    <FavoriteIcon style={element.favorite===1 ? {color: 'red'} : {}} />
                </IconButton>
                <IconButton 
                    aria-label="euro"
                    className="product-container_cardAction_euroButton"
                >
                    <EuroIcon />:{element.price}
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

// export default connect(mapStateToProps, {addToCart, addToFavs, outOfFavs})(Product);
export default Product;