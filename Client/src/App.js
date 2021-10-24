import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// components
import NavbarComponent from './components/Navbar/NavbarComponent';
import MainPage from './Pages/MainPage/MainPage';
import Products from './components/Products/Products';
import Favs from './components/Favs/Favs';
import Cart from './components/Cart/Cart';

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


  return (
    <Provider store={store}>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/store" component={Products} />
          <Route path="/favorites" component={Favs} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
