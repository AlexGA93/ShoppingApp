import React from 'react';
import { useSelector } from 'react-redux';
import { IAppState, IelementProduct } from '../../../Redux/type';

import CartPayment from '../../CartPayment/CartPayment';
import CartBanner from '../../CartBanner/CartBanner';

import Axes from '../../../media/img/axes.png';

import './Cart.scss';

const Cart = ():JSX.Element => {

  const stateCart = useSelector<IAppState, IAppState['shopping']['cart']>(state => state.shopping.cart);
  // console.log(stateCart);
  

  return (
    <div className="cart-container">

      <div className="cart-container_title">
        <img alt="axes" src={Axes} style={{width:'60px'}}/>
        <h3>Shopping Cart</h3>
        <img alt="axes" src={Axes} style={{width:'60px'}}/>
      </div>
      
      <div className="cart-container_content">
        <div className="cart-container_content_list">
          {
            stateCart && stateCart.length!==0 ? (
              stateCart.map((element: IelementProduct) => element.qty ?? 1 >=1 ? (
                  <CartBanner key={element.id} id={element.id} />
              ): null)
            ):(
                <h2>It seems that there's nothing here...</h2>
            )
          }
        </div>

        <div className="cart-container_content_payment">
          <CartPayment />
        </div>
      </div>
    </div>
  )
}

export default Cart