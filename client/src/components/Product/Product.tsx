import React from 'react';
import { bindActionCreators } from 'redux';
import {useDispatch} from 'react-redux';

// import {addToCart, addToFavs, outOfFavs} from '../../actions/shopping';
// import { addToFavs, quitFromFavs } from '../../Redux/actions/shopping';
import{actionCreators} from '../../Redux/index';

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

import './Product.scss';

import { elementProduct } from '../../Redux/type';
import toast from 'react-hot-toast';
//import { color } from '@mui/system';




const Product = (props: any): JSX.Element => {
    let element: elementProduct = props.element;
    //extract element details const {favorite, id, image_url, price, productDescription, productName, stock } = element.element;

    const {addToFavs, quitFromFavs} = bindActionCreators(actionCreators, useDispatch());

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
        quitFromFavs(element);
    };
    
    return (
        <Card sx={{ maxWidth: 500 }} className="product-container">
            
            <CardMedia
            component="img"
            height="194"
            image={element.image_url}
            alt={element.productName}
            />
            
            <CardContent>
                <Typography  paragraph>
                    {element.productName}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={element.favorite===1 ? (() =>removeToFavsMethod(element.productName)):(() => addToFavsMethod(element.productName))}>
                    <FavoriteIcon style={element.favorite===1 ? {color: 'red'} : {}} />
                </IconButton>
                <IconButton aria-label="euro">
                    <EuroIcon />:{element.price}
                </IconButton>
            </CardActions>
        </Card>
        
    )
}

// export default connect(mapStateToProps, {addToCart, addToFavs, outOfFavs})(Product);
export default Product;