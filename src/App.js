import './App.css';
import { Routes, Route } from 'react-router-dom';
import Search from './pages/search';
import Home from './pages/home';
import Nav from './components/nav';
import Leftcamera from './components/leftcamera';
import Details from './pages/details';
import Footer from './components/footer';

function App() {
  return (
   <div className="app-wrapper">
    <Nav />
    <Leftcamera />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    
   </div> 
  );
}

export default App;
