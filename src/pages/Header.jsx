import React, {useState,useEffect} from 'react';
import {OnscrollDown,ScrollDirection} from '../component/onscroll'
import {CloseNavmenu} from '../component/closenavmenu';
import Slider from '../pages/slider/slider'
import Logo from "../images/monarch.png"

// import "../css/swiper.css"; 
  
export function Header() { 
  
  
  const [showNavList, setshowNavList] = useState(true);
   
  useEffect(() => {
     OnscrollDown();
     CloseNavmenu();
  });

        return (<>
                     <header>
              <div className="nav-bar">
                <a href='' className='brand'>logo</a>
                <div className='navigation'>
                  <div className='nav-items'>
                        <i class="uil uil-times nav-close-btn"></i>
                        <a href='#'><i className='uil uil-home'></i>Home</a>
                        <a href='#'><i className='uil uil-home'></i>About</a>
                        <a href='#'><i className='uil uil-home'></i>Service</a>
                        <a href='#'><i className='uil uil-home'></i>Contacts</a>
                  </div>
                </div> 
                <i className="uil uil-apps nav-menu-btn" ></i>
              </div>
              </header> 
              <section id='slider'>
                <Slider/>
              </section>
              <div className='jjj'>
                hello
              </div>
                </>  
           
            
            
             
        )  
     
}  
  
export default Header 



