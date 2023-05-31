import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Details from './components/Details';
import getAllCountries from './redux/countries/CountryActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/details" Component={Details} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
