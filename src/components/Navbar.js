import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <nav className='navbar'>
                <h2>Window Wiz</h2>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;