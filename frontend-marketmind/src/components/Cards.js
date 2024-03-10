import React from 'react';
import './Cards.css';

function Cards() {
  return (
    <div className='services-container'>
      <h1>At Your Service</h1>
      <div className='services'>
        <div className='service'>
          <i className="fas fa-file-signature logo"></i>
          <h2>Let's get started</h2>
          <p>Sign Up on MarketMind and enter the gateway to smart investing!</p>
        </div>
        <div className='service'>
          <i className="fas fa-laptop logo"></i>
          <h2>Creative Visualizations</h2>
          <p>Achieve your Investment goals through the power of our creative Dashboards.</p>
        </div>
        <div className='service'>
          <i className="fas fa-chart-line logo"></i>
          <h2>Trading Signals</h2>
          <p>Trade smarter with our insights and reliable trading analysis.</p>
        </div>
        
      </div>
    </div>
  );
}

export default Cards;
