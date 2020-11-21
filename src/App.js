import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    // BEM css convention
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
