import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Axes from '../../../media/img/axes.png';
import { IAppState } from '../../../Redux/type';
import Store from '../Store/Store';

import './MainPage.scss';

const MainPage = (): JSX.Element => {
  return (
    <div className="products">
        <div className="products__title">
            <img alt="axes" src={Axes} style={{width:'60px'}}/>
            <h3>Product List</h3>
            <img alt="axes" src={Axes} style={{width:'60px'}}/>
        </div>
        <Store />
    </div>
  )
}

export default MainPage