import React from 'react';  
import logo from './logo.svg';  
// import './css/style.css';  
import Header from './pages/Header'; 
import Navbar from './pages/navbar';
import Slider from './pages/slider/slider'
import Home from './pages/home';
import About from './pages/About'
import Service from './pages/service';
import Contact from './pages/contact';
import Footer from './pages/Footer'
import { HashRouter, Route, Switch } from 'react-router-dom';  
function App() {  
  return (  
     <div className="App">  
       <Navbar/>
       <Slider/>
       <About/>
       <Service/>
       <Contact/>
       <Footer/>
     </div>  
  );  
}  
  
export default App;
