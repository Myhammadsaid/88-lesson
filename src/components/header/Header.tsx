import React, { useState } from "react";
import headerLogo from "../../assets/header__logo.png";
import instagramFaceboock from "../../assets/instagram__faceboock.png";
import { motion } from "framer-motion";
import heartCart from "../../assets/heart__cart.png";
import search from "../../assets/search.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<Boolean>(false);
  return (
    <div>
      <motion.header
        initial={{ translateY: -100, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <nav>
            <Link to={"/"} className="header__logo">
              <img src={headerLogo} alt="Header__logo" />
            </Link>
            <div
              className={`nav__items ${toggle ? "open" : ""}`}
              id="navbar-responsive"
            >
              <a href="#" className="nav__item">
                ALL PRODUCTS
              </a>
              <a href="#" className="nav__item">
                ABOUT SEEDRA
              </a>
              <a href="#" className="nav__item">
                OUR BLOG
              </a>
              <Link to={"/contact"} className="nav__item">
                CONTACTS
              </Link>
            </div>
            <div className="nav__items">
              <img src={instagramFaceboock} alt="instagramFaceboock" />
              <form className="header__form">
                <input type="search" placeholder="Search" />
                <img src={search} alt="Search" />
              </form>
              <img src={heartCart} alt="heartCart" />
            </div>
            <button
              onClick={() => setToggle(!toggle)}
              className="menu-btn"
              id="menu-btn"
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </nav>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;
