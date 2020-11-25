import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';

import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })
  }, []);

  return (
    // BEM css convention
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'><Login /></Route>
          <Route path='*'><Redirect to='/' /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
