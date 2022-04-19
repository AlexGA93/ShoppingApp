import { useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IAppState } from '../../Redux/type';

import { Euro, AddShoppingCart, ShoppingCart } from '@mui/icons-material';

import { Button } from '@mui/material';

import Axes from '../../media/img/axes.png';

import './productInfo.scss';

const ProductInfo = () => {
    // extract id from state
    const stateProducts = useSelector<IAppState, IAppState['shopping']['products']>(state => state.shopping.products);
    
    let product = stateProducts.find((element) => element.id===window.location.pathname.split("/").pop());
    console.log(product);
    
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
                    
                    <img src={product?.image_url} alt={product?.productName} />
                    
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
                        <h2>{product?.productName}</h2>
                    </div>
                    {/* Product Price */}
                    <div className='product-info_content_data_price'>
                        <Euro /> 
                        <p>{product?.price}</p>
                    </div>
                    {/* Product bio */}
                    <div className='product-info_content_data_bio'>
                        <p>{product?.productDescription}</p>
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p> */}
                    </div>
                    {/* buttons add and go to cart */}
                    <div className='product-info_content_data_buttons'>
                        <Button variant="outlined" startIcon={<AddShoppingCart />}>
                            Add to Cart
                        </Button>
                        <Button variant="contained" endIcon={<ShoppingCart />}>
                            Go to Cart
                        </Button>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProductInfo
