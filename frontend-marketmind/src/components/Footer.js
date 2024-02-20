import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to our Newsletter
        </p>
        <p className='footer-subscription-text'>
          Join the MarketMind Newsletter and get market insights and news in your inbox.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Company</h2>
            <Link to='/about-us-&-contact-us'>About Us</Link>
            <Link to='/team'>Team MM</Link>
            <Link to='/partners'>Partners</Link>
            <Link to=''>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/about-us-&-contact-us'>Contact Us</Link>
            <Link to='/support'>Support</Link>
            <Link to='/careers'>Careers</Link>
            <Link to=''>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Learn</h2>
            <Link to='/general'>General</Link>
            <Link to='/mm-blogs'>MM Blogs</Link>
            <Link to='/articles'>Articles</Link>
            <Link to=''>Resources</Link>
          </div>
          <div class='footer-link-items'>
          <h2>Social Media</h2>
            <Link to='https://www.facebook.com/' target='_blank'>Facebook</Link>
            <Link to='https://www.instagram.com/' target='_blank'>Instagram</Link>
            <Link to='https://www.youtube.com/' target='_blank'>Youtube</Link>
            <Link to='https://www.twitter.com/' target='_blank'>Twitter</Link>
            <Link to='https://www.linkedin.com/' target='_blank'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              MarketMind
            </Link>
          </div>
          <small class='website-rights'>MarketMind © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.twitter.com/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;