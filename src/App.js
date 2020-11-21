import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    // BEM css convention
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/checkout'><Checkout /></Route>
          <Route path='*'><Redirect to='/' /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
