import React, { Component } from 'react';
import glasspic1 from '../assets/glasspic1.jpg';
import { Link, Element } from 'react-scroll';
import '@fortawesome/fontawesome-free/css/all.min.css';

class Body extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className='body'>
                <section id='home'>
                <img src={glasspic1} alt="Glass" className='glass-image1'></img>
                </section>
                <section>'>
                    <div className='body-content'>
                        <h2  id='about'>About us</h2>
                        <p>Since 2015, Window Wiz Installation has provided top-quality, energy-efficient window solutions for homes and businesses. Our expert team delivers exceptional craftsmanship and innovative designs to enhance any space with style and functionality. Trust us for all your window installation needs.</p>
                    </div>
                </section>
                <div className="service-container service-section" id='services'>
                    <h1 class="service-h2">Services</h1>
                    <div class="row service-section__grid" data-staggered-reveal="">
                        <div class="service-section__item visible" data-reveal="">
                        <div class="service-item">
                            <h3 class="service-item__title">Residential Window Installation</h3>
                            <p class="service-item__descrip">Expert installation of energy-efficient windows for homes, enhancing comfort and reducing energy costs.</p>

                        </div>
                        </div>
                        <div class="service-section__item visible" data-reveal="">
                        <div class="service-item">
                            <h3 class="service-item__title">Commercial Window Solutions</h3>
                            <p class="service-item__descrip">Customized window installations for businesses, including offices, retail spaces, and commercial buildings.</p>

                        </div>
                        </div>
                        <div class="service-section__item visible" data-reveal="">
                        <div class="service-item">
                            <h3 class="service-item__title">Window Replacement</h3>
                            <p class="service-item__descrip">Removal and replacement of old windows with modern, high-performance options for improved aesthetics and functionality.</p>

                        </div>
                        </div>
                        <div class="service-section__item visible" data-reveal="">
                        <div class="service-item">
                            <h3 class="service-item__title">Custom Window Design</h3>
                            <p class="service-item__descrip">Design and installation of unique, tailor-made window solutions to fit specific architectural styles and personal preferences.</p>

                        </div>
                        </div>
                        <div class="service-section__item visible" data-reveal="">
                        <div class="service-item">
                            <h3 class="service-item__title">Energy-Efficient Upgrades</h3>
                            <p class="service-item__descrip">Installation of advanced window technologies to improve insulation and reduce heating and cooling expenses.</p>

                        </div>
                        </div>
                        <div class="service-section__item visible" data-reveal="">
                        <div class="service-item">
                            <h3 class="service-item__title">Window Repair and Maintenance</h3>
                            <p class="service-item__descrip">Comprehensive repair and maintenance services to ensure windows remain in optimal condition and extend their lifespan.</p>

                        </div>
                        </div>
                        <div class="service-section__item visible" data-reveal="">
                        <div class="service-item">
                            <h3 class="service-item__title">Skylight Installation</h3>
                            <p class="service-item__descrip">Professional installation of skylights to enhance natural lighting and create an open, airy atmosphere in any room.</p>

                        </div>
                        </div>
                        <div class="service-section__item visible" data-reveal="">
                        <div class="service-item">
                            <h3 class="service-item__title">Consultation and Design Services</h3>
                            <p class="service-item__descrip">Personalized consultation and design services to help clients choose the best window options for their specific needs and budgets.</p>

                        </div>
                        </div>
                    </div>
                </div>
                <div className='contact-container contact-section'>
                    <h2>Contact Us</h2>
                    <form className='contact-form'>
                        <div className='form-group'>
                        <label for='name'>Name</label>
                        <input type='text' id='name' name='name' required />
                        </div>
                        <div className='form-group'>
                        <label for='email'>Email</label>
                        <input type='email' id='email' name='email' required />
                        </div>
                        <div className='form-group'>
                        <label for='message'>Message</label>
                        <textarea id='message' name='message' rows='5' required></textarea>
                        </div>
                        <button type='submit' className='btn'>Submit</button>
                    </form>
                </div>
                <div class="social-media-container" id='contact'>
                    
                    <a href="https://www.facebook.com" class="social-media-button facebook" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-facebook-f"></i>                    </a>
                    <a href="https://www.twitter.com" class="social-media-button twitter" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" class="social-media-button instagram" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com" class="social-media-button linkedin" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        );
    }
}
 
export default Body;