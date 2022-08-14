import React, { useState ,useRef} from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../images/wegahta.png'

import '../css/navbar.css'


const clickOutsideRef = (content_ref) => {
  document.addEventListener('mousedown', (e) => {
   
      
          if (content_ref.current && !content_ref.current.contains(e.target)) {
              content_ref.current.classList.add('close')
          }
      
  })
}

const Navbar = () => {

  const dropdown_content_el = useRef(null)

  clickOutsideRef(dropdown_content_el)

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
         <div>
          {/* <div className='contactHeader'>

          </div> */}

          <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo}/>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<i class="bi bi-x-circle lg icon"></i>)
                        : (<i class="bi bi-list lg icon"></i>)}

                </div>
                <div ref={dropdown_content_el} className="menucontent">

                    <ul   className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <a href='#home' onClick={closeMenu}>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#about' onClick={closeMenu}>About</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#services' onClick={closeMenu}>Service</a>
                        </li>
                     
                        <li className='nav-item'>
                            <a href='#contact' onClick={closeMenu}>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
         </div>
       
    )
}

export default Navbar