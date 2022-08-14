import React, { Component } from 'react' 
import logo from '../images/wegahta.png' 

import '../css/footer.css'
  
export class Footer extends Component {  
    render() {  
        return ( 
          <>
             <div className="footer">
                 <div className="footer-top">
                    <div className="container ">
                     <div className="row">

                       <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer-info">
                          <img className="logo" src={logo} alt="wegahta" />
                          <p>
                            Addis Ababa, Ethiopia <br/><br/>
                            <strong>Phone:</strong> 0943031777<br/>
                            <strong>Email:</strong> robelghw12@gmail.com<br/>
                          </p>
                          <div className="social-links mt-3">
                            <a href="#" className="twitter"><i class="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i class="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i class="bi bi-instagram"></i></a>
                            <a href="#" className="google-plus"><i class="bi bi-skype"></i></a>
                            <a href="#" className="linkedin"><i class="bi bi-linkedin"></i></a>
                          </div>
                       </div>
                     </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 footer-links">
                      <h4>Useful Links</h4>
                      <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                      </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 footer-links">
                      <h4>Our Services</h4>
                      <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="#services">Web Design</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#services">Web Development</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#services">Product Management</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#services">Graphic Design</a></li>
                      </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 footer-newsletter">
                      <h4>Our Newsletter</h4>
                      <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                      <form action="" method="post">
                        <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                      </form>

                    </div>

           </div>
       </div>
                </div>

                 <div className="container">
                    <div className="copyright">
                      &copy; Copyright <strong><span>Gp</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                      Designed by <a href="#">wegahta tech</a>
                    </div>
                </div>
          </div>
          </> 
       
        )  
    }  
}  
  
export default Footer  