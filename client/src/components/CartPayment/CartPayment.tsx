import { useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import { IAppState, IelementProduct } from '../../Redux/type';

import './CartPayment.scss';



const CartPayment = ():JSX.Element => {
    // access to cart state to calculate total Price
    const stateCart = useSelector<IAppState, IAppState['shopping']['cart']>(state => state.shopping.cart);
    // console.log(stateCart);

    const totalAmountCalc = () => {
        let total = 0;
        stateCart.forEach((element: IelementProduct) => total+=(element.price*(element.qty ?? 1)))
        return total;
    };
    
    const productList = stateCart.map((product: IelementProduct) => 
            
        product.qty ?? 0 >=1 ? (
            <ListItem
                sx={{ width: '100%', margin: '10px 0 10px 0' }}
                key={product.id}
                secondaryAction={
                    <div> 
                        <img src={product.image_url} alt="product_image" /> ${product.price} x{product.qty} 
                    </div>
                }
            >
                {product.productName}
            </ListItem>
        
        ): null
        );
   
    
  return (
    <Card sx={{ maxWidth: 600 }} className="cartPayment-container">
        <Typography 
            sx={{ 
                fontWeight: 'bold',
                margin: '30px'
             }} 
            className="cartPayment-container_title"
            variant="h4" 
            paragraph
        >
            Payment Confirmation
        </Typography>

        <List className="cartPayment-container_content">
            {
            productList
            }
        </List>
        
        <Typography
        sx={{ fontSize: 27, fontWeight: 'bold' }}
        className="cartBanner-container_amount_total"
        variant="body1"
        gutterBottom
        >
            TOTAL AMOUNT: { totalAmountCalc() }
        </Typography>

        <div className="cartPayment-container_buttons">
            <Button 
                sx={{ margin: '15px', color: "#FFFFFF", fontWeight: 'bold' }} 
                className="cartPayment-container_buttons_element"> 
                Make Payment! 
            </Button>
        </div>
        

    </Card>
  )
}

export default CartPayment