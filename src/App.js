import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Details from './components/Details';

function App() {
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
