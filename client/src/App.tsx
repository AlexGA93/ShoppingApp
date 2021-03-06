import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// components
import NavbarComponent from './components/Navbar/NavbarComponent';
import MainPage from './components/Pages/MainPage/MainPage';
import Product from './components/Product/Product';
// import Favs from './components/Favs/Favs';
// import Cart from './components/Cart/Cart';

// redux store
import store from './Redux/store/store';
import {Provider} from 'react-redux';
// action
//actions
import {getAllProducts} from './Redux/actions/shopping';

// styles
import './App.scss';

const App = () => {
  
  // redux store when DOM is updated
  useEffect(()=>{
    //dispatch 'get products' action
    store.dispatch(getAllProducts());
  }, [])

console.log(store);

  return (
    <Provider store={store}>
      <NavbarComponent />
      {/* <MainPage /> */}
      <Product />


      {/* <Router>
        <NavbarComponent />
         <Routes>
          <Route exact path="/" component={MainPage} />
          <Route path="/store" component={Products} />
          <Route path="/favorites" component={Favs} />
          <Route path="/cart" component={Cart} /> 
        </Routes> 
      </Router> */}
    </Provider>
  );
}

export default App;