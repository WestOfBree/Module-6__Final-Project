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
                    <a href="" className="footer__column--link no-click">Blog</a>
                    <a href="" className="footer__column--link no-click">FAQs</a>
                    <a href="" className="footer__column--link no-click">Support</a>
                    <a href="" className="footer__column--link no-click">About Us</a>
                </div>
                <div className="footer__column">
                    <div className="footer__column--title">PRESS</div>
                    <a href="" className="footer__column--link no-click">Logos</a>
                    <a href="" className="footer__column--link no-click">Events</a>
                    <a href="" className="footer__column--link no-click">Stories</a>
                    <a href="" className="footer__column--link no-click">Office</a>
                </div>
                <div className="footer__column">
                    <div className="footer__column--title">TEAM</div>
                    <a href="" className="footer__column--link no-click">Career</a>
                    <a href="" className="footer__column--link no-click">Founders</a>
                    <a href="" className="footer__column--link no-click">Culture</a>
                    <a href="" className="footer__column--link no-click">Onboarding</a>
                </div>
                <div className="footer__column">
                    <div className="footer__column--title">LEGAL</div>
                    <a href="" className="footer__column--link no-click">GDPR</a>
                    <a href="" className="footer__column--link no-click">Privacy Policy</a>
                    <a href="" className="footer__column--link no-click">Terms of Service</a>
                    <a href="" className="footer__column--link no-click">Disclaimer</a>
                </div>
            </div>
            <div className="footer__divider"></div>
            <div className="footer__bottom">
                <div className="footer__logo">
                    {/* <img src="./assets/cat_logo.svg" alt="" class="footer__logo--img"> */}
                    <img src={logo} alt="Frog Logo" className="footer__logo--img" />
                </div>
                <div className="footer__socials">
                    <a href="" className="footer__social--link no-click"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="" className="footer__social--link no-click"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="" className="footer__social--link no-click"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </div>
    </footer>
          );
}  
  export default Footer;