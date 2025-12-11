       import React from 'react'; 
       import logo from "../assets/frog.png";
       import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
       import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
      function Footer() {
          return (
              <footer className="footer">     
        <div className="row footer__row">
            {/* <img src={logo} alt="Frog Logo" className="frog__logo" /> */}
            <div className="footer__columns">
            
                <div className="footer__column">
                    <div className="footer__column--title">MAIN</div>
                    <a href="" className="footer__column--link no-cursor">Blog</a>
                    <a href="" className="footer__column--link no-cursor">FAQs</a>
                    <a href="" className="footer__column--link no-cursor">Support</a>
                    <a href="" className="footer__column--link no-cursor">About Us</a>
                </div>
                <div className="footer__column">
                    <div className="footer__column--title">PRESS</div>
                    <a href="" className="footer__column--link no-cursor">Logos</a>
                    <a href="" className="footer__column--link no-cursor">Events</a>
                    <a href="" className="footer__column--link no-cursor">Stories</a>
                    <a href="" className="footer__column--link no-cursor">Office</a>
                </div>
                <div className="footer__column">
                    <div className="footer__column--title">TEAM</div>
                    <a href="" className="footer__column--link no-cursor">Career</a>
                    <a href="" className="footer__column--link no-cursor">Founders</a>
                    <a href="" className="footer__column--link no-cursor">Culture</a>
                    <a href="" className="footer__column--link no-cursor">Onboarding</a>
                </div>
                <div className="footer__column">
                    <div className="footer__column--title">LEGAL</div>
                    <a href="" className="footer__column--link no-cursor">GDPR</a>
                    <a href="" className="footer__column--link no-cursor">Privacy Policy</a>
                    <a href="" className="footer__column--link no-cursor">Terms of Service</a>
                    <a href="" className="footer__column--link no-cursor">Disclaimer</a>
                </div>
            </div>
            <div className="footer__divider"></div>
            <div className="footer__bottom">
                <div className="footer__logo">
                    {/* <img src="./assets/cat_logo.svg" alt="" class="footer__logo--img"> */}
                    <img src={logo} alt="Frog Logo" className="footer__logo--img" />
                </div>
                <div className="footer__socials">
                    <a href="" className="footer__social--link no-cursor"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="" className="footer__social--link no-cursor"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="" className="footer__social--link no-cursor"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </div>
    </footer>
          );
}  
  export default Footer;