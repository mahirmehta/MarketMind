import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Your Gateway to Smart Investing</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          to='/sign-up'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get Started
        </Button>
        <Button
          to='https://github.com/mahirmehta/MarketMind/assets/74295910/4272b5ae-63da-4dc3-8638-1a48f558723c'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          
          onClick={console.log('hey')}
        >
          How it works <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;