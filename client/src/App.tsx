import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// components
import NavbarComponent from './components/Navbar/NavbarComponent';
import MainPage from './components/Pages/MainPage/MainPage';
//import Product from './components/Product/Product';
import Store from './components/Pages/Store/Store';
import Favorites from './components/Pages/Favorites/Favorites';
import ProductInfo from './components/productInfo/ProductInfo';
// import Cart from './components/Cart/Cart';

// redux store
// import store from './Redux/store/store';
import {useDispatch} from 'react-redux';

//actions
import {getAllProducts, getAllFavs} from './Redux/actions/shopping';

// styles
import './App.scss';
import { Toaster } from 'react-hot-toast';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  // redux store when DOM is updated
  useEffect(()=>{
    // dispatch 'get products' action
    dispatch(getAllProducts());
    dispatch(getAllFavs());
  }, [dispatch])

//console.log(store);

  return (
      <Fragment>
        <Router>
          <NavbarComponent />
            <Routes>
              {/* React router v6 version */}
            <Route path="/" element={<MainPage />} />
            <Route path="/store" element={<Store />} />
            <Route path="/favorites" element={<Favorites />}/>
            <Route path="/products/product/:id" element={<ProductInfo />} />
          </Routes> 
        </Router>
        <Toaster   
        position="top-right"
        reverseOrder={true}/>
      </Fragment>
  );
}

export default App;