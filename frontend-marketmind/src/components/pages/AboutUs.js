import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        MarketMind is dedicated to providing a comprehensive approach to stock market prediction
        using social media analysis and trendline analysis.
        Our predictive model aims to forecast market movements.
        Leveraging the power of social media data, we analyze sentiments to gauge market
        trends.
      </p>

      <p>
        At MarketMind, we are committed to staying at the forefront of technological advancements
        and data analysis techniques to provide accurate and timely insights for informed
        decision-making in the dynamic stock market environment.
      </p>
      <div className="contact-us-section">
        <h1>Contact Us</h1>
        <p>
          Have questions or inquiries? Reach out to us using the contact details below.
        </p>
        <p>Email: info@marketmind.com</p>
        <p>Phone: +1 (123) 456-7890</p><br />
        <p>K.J. Somaiya College of Engineering<br />
            Vidyanagar, Vidya Vihar East, Vidyavihar, <br />
            Mumbai, Maharashtra 400077
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
