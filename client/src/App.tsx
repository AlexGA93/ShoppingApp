import {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// components
import NavbarComponent from './components/Navbar/NavbarComponent';
import MainPage from './components/Pages/MainPage/MainPage';
import Store from './components/Pages/Store/Store';
import Favorites from './components/Pages/Favorites/Favorites';
import ProductInfo from './components/productInfo/ProductInfo';
import { Toaster } from 'react-hot-toast';
// styles
import './App.scss';

import { useDispatch } from 'react-redux';
import { getAllFavs, getAllProducts } from './Redux/actions/actions';

const App = (): JSX.Element => {  
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getAllFavs())
    }, [dispatch]);
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
