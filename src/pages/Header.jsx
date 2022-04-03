import React, {useState,useEffect} from 'react';
import {OnscrollDown,ScrollDirection} from '../component/onscroll'
import {CloseNavmenu} from '../component/closenavmenu'
import Logo from "../img/monarch.png"
  
export function Header() { 
  
  
  const [showNavList, setshowNavList] = useState(true);
   
  useEffect(() => {
     OnscrollDown();
     CloseNavmenu();
  });

        return (  
            <div class="navbar_container">  
                  <nav id="navbar" class="over-navbar navbar navbar-expand-lg">
                      <div class="navbar-brand" href="#">
                       <img src={Logo}  alt=""/>
                      </div>
                    
                      <label for="checkbox_toggle" className="hamburger">
                        <input type="checkbox" id="checkbox_toggle" />
                          <button class="navbar-toggler toggleButton " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon" >
                              <i class="bi bi-list toogle-icon" onClick={(e)=>
                              {
                                // document.getElementsByClassName('list')[0].style.display = 'flex';
                              }}></i>
                            </span>
                          </button>
                     
                       <div class="menulist collapse navbar-collapse" id="navbarSupportedContent" id="list" >
                       <ul class="navbar-nav mr-r">
                         <li class="nav-item ">
                           <a class="nav-link scrollto" href="#services">Home</a>
                         </li>
                         <li class="nav-item">
                           <a class="nav-link scrollto"  href="#services">Service</a>
                         </li>
                         <li class="nav-item">
                           <a class="nav-link scrollto"  href="#services">About</a>
                         </li>
                         <li class="nav-item">
                           <a class="nav-link scrollto"  href="#services">Team</a>
                         </li>

                         <li class="nav-item">
                           <a class="nav-link scrollto"  href="#services">Contact</a>
                         </li>
                       
                       </ul>
              
                      </div>
                      
             
                      
                      
                      
                      
                  </label>
                 
                </nav>
            </div>  
        )  
     
}  
  
export default Header 