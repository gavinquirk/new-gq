import React, { Component } from 'react';

import './Lander.css';

export default class Lander extends Component {
  render() {
    return (
      <div className='Lander'>
        <h1 className='heading heading-large'>Full-Stack Web Developer</h1>
        <h4 className='subheading'>Creating your web solutions</h4>
        <img className='avatar' src='./images/avatar.svg' alt='Gavin' />
      </div>
    );
  }
}
