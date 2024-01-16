import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        MarketMind is dedicated to providing a comprehensive approach to stock market prediction
        using real-time social media analysis, volume and open interest, and market depth analysis.
        Our predictive model aims to forecast market movements, specifically identifying gap up or
        gap down scenarios.
      </p>
      <p>
        Leveraging the power of social media data, we analyze real-time sentiments to gauge market
        trends. Additionally, we utilize Volume and Open Interest (OI) to make predictions and
        incorporate market depth analysis to further refine our market forecasts.
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
