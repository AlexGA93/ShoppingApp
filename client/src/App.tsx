import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// components
import NavbarComponent from './components/Navbar/NavbarComponent';
import MainPage from './components/Pages/MainPage/MainPage';
//import Product from './components/Product/Product';
import Store from './components/Pages/Store/Store';
// import Favs from './components/Favs/Favs';
// import Cart from './components/Cart/Cart';

// redux store
import store from './Redux/store/store';
import {Provider} from 'react-redux';

//actions
import {getAllProducts} from './Redux/actions/shopping';

// styles
import './App.scss';

const App = (): JSX.Element => {
  
  // redux store when DOM is updated
  useEffect(()=>{
    //dispatch 'get products' action
    store.dispatch(getAllProducts());
  }, [])

//console.log(store);

  return (
    <Provider store={store}>
      {/* <NavbarComponent /> */}
      {/* <MainPage /> */}
      {/* <Store /> */}
        {/* <Product /> */}


      <Router>
        <NavbarComponent />
         <Routes>
           {/* React router v6 version */}
          <Route path="/" element={<MainPage />} />
          <Route path="/store" element={<Store />} />
          {/* <Route path="/favorites" element={< Favs/>}/>
          <Route path="/cart" element={<Cart />} /> */}
        </Routes> 
      </Router>
    </Provider>
  );
}

export default App;