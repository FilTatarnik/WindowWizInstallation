import React, { Component } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    
    render() { 
        return ( 
            <nav className='navbar'>
                    <Link to="home" smooth={true} duration={500} offset={0}>
                            <h2>Window Wiz</h2>
                    </Link>
                <ul>
                    <Link to="home" smooth={true} duration={500} offset={0}>
                            <li>Home</li>
                    </Link>

                    <Link to="about" smooth={true} duration={500} offset={-125}>
                            <li>About</li>
                    </Link>
                    <Link to="services" smooth={true} duration={500} offset={0}>
                            <li>Services</li>
                    </Link>
                    <Link to="contact" smooth={true} duration={500} offset={0}>
                            <li>Contact</li>
                    </Link>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;