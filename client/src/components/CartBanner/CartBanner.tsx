import { bindActionCreators } from 'redux';

import { useDispatch, useSelector } from 'react-redux';
import { IAppState, IelementProduct } from '../../Redux/type';
import { actionCreators } from '../../Redux';

import {Card, CardContent, CardMedia, Typography } from '@mui/material';

import './CartBanner.scss';
import { Link } from 'react-router-dom';

const CartBanner: React.FC<{ key: string, id: string}>  = (key): JSX.Element => {
    const {addOneMore, removeOneLess} = bindActionCreators(actionCreators, useDispatch());
    
    const stateCart = useSelector<IAppState, IAppState['shopping']['cart']>(state => state.shopping.cart);
    const productInfo = ((stateCart.find(element => element.id === key.id)) as IelementProduct);
    
    const toggleProductQty = (label: string) => label==='+' ? addOneMore(productInfo) : removeOneLess(productInfo);

    return (
        <Card className="cartBanner-container">
            <div className="cartBanner-conatiner_bannerMedia">
                <Link to={`/products/product/${productInfo.id}`} className="cartBanner-conatiner_bannerMedia_link">
                    <CardMedia
                    component="img"
                    height="200"
                    image= {productInfo.image}
                    alt={productInfo.title}
                    />
               </Link>
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
                    {productInfo.title}
                </Typography>
                <Typography 
                    sx={{ fontSize: 30, fontWeight: 'bold', width: '25%' }}
                    className="product-container_cardContent_price" 
                    variant="body2" 
                    gutterBottom
                >
                    {productInfo.price}$
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
                
                <button onClick={() => toggleProductQty('-')}>-1</button>
                { productInfo.qty }
                <button onClick={() => toggleProductQty('+')}>+1</button>
                
            </CardContent>
            
        </Card>
  )
}

export default CartBanner