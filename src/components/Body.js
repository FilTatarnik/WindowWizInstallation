import React, { Component } from 'react';


class Body extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className='body'>
                <h1>Body</h1>
                <p>Our team of professionals will install your windows with precision and care.</p>
                <p>Our services include:</p>
                <ul>
                    <li>Window Installation</li>
                    <li>Window Replacement</li>
                    <li>Window Repair</li>
                </ul>
            </div>
        );
    }
}
 
export default Body;