import React from 'react';  
import logo from './logo.svg';  
import './App.scss';  
import Header from './pages/Header'; 
import Home from './pages/home';
import About from './pages/About'
import Service from './pages/service';
import Contact from './pages/contact';
import Footer from './pages/Footer'
import { HashRouter, Route, Switch } from 'react-router-dom';  
function App() {  
  return (  
     <div className="App">  
       <Header/>
       <Home/>
       <About/>
       <Service/>
       <Contact/>
       <Footer/>
     </div>  
  );  
}  
  
export default App;
