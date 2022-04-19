import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IAppState, IelementProduct } from '../../Redux/type';
import { Link } from 'react-router-dom';

import { actionCreators } from '../../Redux';

import { Euro, AddShoppingCart, ShoppingCart } from '@mui/icons-material';
import { Button } from '@mui/material';

import Axes from '../../media/img/axes.png';

import './productInfo.scss';


const ProductInfo = () => {
    const {addToCart} = bindActionCreators(actionCreators, useDispatch());
    
    let productId = window.location.pathname.split("/").pop();

    // extract id from state
    const stateProducts = useSelector<IAppState, IAppState['shopping']['products']>(state => state.shopping.products);
    let product = stateProducts.find((element: IelementProduct) => element.id.toString() === productId?.toString());
    console.log(product);
    
    
    
    const toggleBuy = () => {
        addToCart(product as IelementProduct);
    };

    return (
        <div className='product-info'>
            <div className="product-info_title">
                <img alt="axes" src={Axes} style={{width:'60px'}}/>
                    <h3>Product Information</h3>
                <img alt="axes" src={Axes} style={{width:'60px'}}/>
            </div>
            
            <div className='product-info_content'>
                <div className='product-info_content_media'>
                    {/* Product Image */}
                    
                    <img src={product?.image} alt={product?.title} />
                    
                    {/* Product Favorite Icon */}
                    <div className='product-info_content_media_fav'>
                        {
                        product?.favorite ? (
                            <FavoriteIcon style={{color: 'red'}} fontSize="large"/>
                        ) : (
                            <FavoriteIcon fontSize="large"/>
                        )}
                    </div>
                </div>

                <div className='product-info_content_data'>
                    {/* Product Name */}
                    <div className='product-info_content_data_name'>
                        <h2>{product?.title}</h2>
                    </div>
                    {/* Product Price */}
                    <div className='product-info_content_data_price'>
                        <Euro /> 
                        <p>{product?.price}</p>
                    </div>
                    {/* Product bio */}
                    <div className='product-info_content_data_bio'>
                        <p>{product?.description}</p>
                    </div>
                    {/* buttons add and go to cart */}
                    <div className='product-info_content_data_buttons'>
                        <Button 
                        variant="outlined"
                        onClick={toggleBuy} 
                        startIcon={<AddShoppingCart 
                        />}>
                            Add to Cart
                        </Button>
                        <Link to={'/cart'}>
                            <Button variant="contained" endIcon={<ShoppingCart />}>
                                Go to Cart
                            </Button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProductInfo
