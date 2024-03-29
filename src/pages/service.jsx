import React, { Component } from 'react';

import '../css/service.css';

import Sensor from '../images/sensor.jpg';
import Fingerprint from '../images/fingerprintaccess.jpg'
import Antitheft from '../images/anti-theftalarm.jpg'
import Camer from '../images/camera.jpg'
import Lcd from '../images/lcd.jpg'
import Mobilecontrollsecurity from '../images/mobile-controllsecurity.jpg'

class service extends Component {
    render() {
        return (
            <div>
              <section id="services" class="services">
                <div class="container" data-aos="fade-up">

                    <div class="servie-title">
                    <h2>Services</h2>
                    
                    </div>
                    <p>Check our Services</p>

                    <div class="row">
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div class="icon-box">
                        <img src={Sensor} class="img-fluid" alt=""/>
                        <h4><a href="">Lorem Ipsum</a></h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                        <div class="icon-box">
                        <img src={Antitheft} class="img-fluid" alt=""/>
                        <h4><a href="">Lorem Ipsum</a></h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                        <div class="icon-box">
                        <img src={Camer} class="img-fluid" alt=""/>
                        <h4><a href="">Lorem Ipsum</a></h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                        <div class="icon-box">
                        <img src={Lcd} class="img-fluid" alt=""/>
                        <h4><a href="">Lorem Ipsum</a></h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                        <div class="icon-box">
                        <img src={Mobilecontrollsecurity} class="img-fluid" alt=""/>
                        <h4><a href="">Lorem Ipsum</a></h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                        <div class="icon-box">
                        <img src={Fingerprint} class="img-fluid" alt=""/>
                        <h4><a href="">Lorem Ipsum</a></h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    </div>

                </div>
                </section>
            </div>
        );
    }
}

export default service;
