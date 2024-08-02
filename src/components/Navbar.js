import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }));
    }

    closeMenu = () => {
        this.setState({ menuOpen: false });
    }

    render() {
        return (
            <>
                {this.state.menuOpen && <div className="overlay" onClick={this.closeMenu}></div>}
                <nav className='navbar'>
                    <Link to="home" smooth={true} duration={500} offset={0}>
                        <h1>Window Wiz</h1>
                    </Link>
                    <div className={`navbar-toggler ${this.state.menuOpen ? 'active' : ''}`} onClick={this.toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={this.state.menuOpen ? 'open' : ''}>
                        <Link to="home" smooth={true} duration={500} offset={0} onClick={this.closeMenu}>
                            <li>Home</li>
                        </Link>
                        <Link to="about" smooth={true} duration={500} offset={-125} onClick={this.closeMenu}>
                            <li>About</li>
                        </Link>
                        <Link to="services" smooth={true} duration={500} offset={0} onClick={this.closeMenu}>
                            <li>Services</li>
                        </Link>
                        <Link to="contact" smooth={true} duration={500} offset={0} onClick={this.closeMenu}>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Navbar;