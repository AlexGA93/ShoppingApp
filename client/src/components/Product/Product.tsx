import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
//import ShareIcon from '@mui/icons-material/Share';
import EuroIcon from '@mui/icons-material/Euro';

import './Product.scss';

const Product = (props: any): JSX.Element => {
    
    
    //extract props details
    const {favorite, id, image_url, price, productDescription, productName, stock } = props.element;
    

    return (
        <Card sx={{ maxWidth: 345 }} className="product-container">
            {/* media */}
            <CardMedia
            component="img"
            height="194"
            image={image_url}
            alt="Game Boyd"
            />
            {/* Content */}
            <CardContent>
                <Typography  variant="body2" color="text.secondary">
                    This impressive game boy is a perfect party dish and a fun way to enjoy
                    together with your friends. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="euro">
                    <EuroIcon />:{price}
                </IconButton>
            </CardActions>
        </Card>
        
    )
}

export default Product