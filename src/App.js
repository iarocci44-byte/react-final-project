import './App.css';
import { Routes, Route } from 'react-router-dom';
import Search from './pages/search';
import Home from './pages/home';
import Nav from './components/nav';
import Leftcamera from './components/leftcamera';

function App() {
  return (
   <div>
    <Nav />
    <Leftcamera />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    
   </div> 
  );
}

export default App;
