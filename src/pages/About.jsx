import React, { Component } from 'react';
import '../css/about.css'
import AboutI from '../images/about.jpg'

class About extends Component {
    render() {
        return (
                <div>
                    <section id="about">
                            
                    <div class="container" data-aos="fade-up">

                        <div class="aboutus-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-3 col-sm-6 col-xs-12">
                                    <div class="aboutus">
                                        <h2 class="aboutus-title">About Us</h2>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dolores eos veritatis officia consequatur. Accusamus nesciunt alias possimus saepe unde?</p>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dolores eos veritatis officia consequatur. Accusamus nesciunt alias possimus saepe unde?</p>
                                        <a class="aboutus-more" href="#">read more</a>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-xs-12">
                                    <div class="aboutus-banner">
                                        <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div class="col-md-5 col-sm-6 col-xs-12">
                                    <div class="feature">
                                        <div class="feature-box">
                                            <div class="clearfix">
                                                <div class="iconset">
                                                <i class="bi bi-gear icon"></i>
                                                </div>
                                                <div class="feature-content">
                                                    <h4>Work with heart</h4>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dolores eos veritatis officia consequatur. Accusamus nesciunt alias possimus saepe unde?</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="feature-box">
                                            <div class="clearfix">
                                                <div class="iconset">
                                                <i class="bi bi-gear icon"></i>
                                                </div>
                                                <div class="feature-content">
                                                    <h4>Reliable services</h4>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dolores eos veritatis officia consequatur. Accusamus nesciunt alias possimus saepe unde?</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="feature-box">
                                            <div class="clearfix">
                                                <div class="iconset">
                                                <i class="bi bi-gear icon"></i>
                                                </div>
                                                <div class="feature-content">
                                                    <h4>Great support</h4>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dolores eos veritatis officia consequatur. Accusamus nesciunt alias possimus saepe unde?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                    
             </div>
          </section>
         </div>
        );
    }
}

export default About;