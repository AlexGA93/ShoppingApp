import {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// components
import NavbarComponent from './components/Navbar/NavbarComponent';
import Presentation from './components/Pages/Presentation/Presentation';
import MainPage from './components/Pages/MainPage/MainPage';
// import Store from './components/Pages/Store/Store';
import Favorites from './components/Pages/Favorites/Favorites';
import ProductInfo from './components/productInfo/ProductInfo';
import { Toaster } from 'react-hot-toast';
// styles
import './App.scss';

import { useDispatch } from 'react-redux';
import { getAllFavs, getAllProducts } from './Redux/actions/actions';
import Cart from './components/Pages/Cart/Cart';

const App = (): JSX.Element => {  
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
        // dispatch(getAllFavs())
    }, [dispatch]);
  return (
      
        <Fragment>
        <Router>
          <NavbarComponent />
            <Routes>
              {/* React router v6 version */}
            <Route path="/" element={<Presentation />} />
            <Route path="/store" element={<MainPage />} />
            <Route path="/favorites" element={<Favorites />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/product/:id" element={<ProductInfo />} />
            
          </Routes> 
        </Router>
        <Toaster   
        position="bottom-right"
        reverseOrder={true}/>
      </Fragment>
      
  );
}

export default App;
