import React from "react";
import headerStyles from "../../styles/Header.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaHeart, FaShoppingBasket } from "react-icons/fa"


function Header() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <>
      <nav className={headerStyles.navBar}>
        <SearchBar />
        <div className={headerStyles.navContainer}>
          <select className={headerStyles.currency}>
            <option className={headerStyles.option} value="HRN">
              HRN: ₴
            </option>
            <option className={headerStyles.option} value="USD">
              USD: $
            </option>
          </select>
          <select className={headerStyles.language}>
            <option className={headerStyles.option} value="UKR">
              UKR
            </option>
            <option className={headerStyles.option} value="ENG">
              ENG
            </option>
          </select>
          <FaHeart className={headerStyles.heart} />
          <FaShoppingBasket className={headerStyles.cart} />
          <div className={headerStyles.linkBlock}>
            {isLoggedIn ? (
              <Link to="/sign-up" className={headerStyles.user}>
                Sign Up
              </Link>
            ) : (
              <Link to="/profile" className={headerStyles.user}>
                Profile
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
