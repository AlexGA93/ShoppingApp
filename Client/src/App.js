import React,{createContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// components
import NavbarComponent from './components/Navbar/NavbarComponent';
import MainPage from './Pages/MainPage/MainPage';

import Products from './components/Products/Products';
import Favs from './components/Favs/Favs';
import Cart from './components/Cart/Cart';

import './App.scss';

const App = () => {
  // react context provider to wrap tree cof components that needs context
  const UserContext = createContext();

  return (
    <UserContext.Provider>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/store" component={Products} />
          <Route path="/favorites" component={Favs} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
