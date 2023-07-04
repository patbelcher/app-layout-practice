import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Err404 from './pages/Err404';

import AppLayout from './layouts/AppLayout';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/about" element={ <About/>} />
        <Route path="/" element={ <Home/>} />
        <Route path="*" element={ <Err404/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
