import React from "react";
import footerLogo from "../../assets/header__logo.png";
import instagramFaceboock from "../../assets/instagram__faceboock.png";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer__items">
            <div className="footer__item">
              <a href="#" className="footer__link">
                ALL PRODUCTS
              </a>
              <a href="#" className="footer__link">
                ABOUT SEEDRA
              </a>
              <a href="#" className="footer__link">
                OUR BLOG
              </a>
              <a href="#" className="footer__link">
                <img src={footerLogo} alt="footerLogo" />
              </a>
              <a href="#" className="footer__link">
                Terms&Conditions
              </a>
              <a href="#" className="footer__link">
                Privacy Policy
              </a>
              <a href="#" className="footer__link">
                Terms&Conditions
              </a>
            </div>
            <hr />
            <div className="footer__item">
              <img src={instagramFaceboock} alt="instagramFaceboock" />
              <a href="#" className="footer__link">
                All rights reserved
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
