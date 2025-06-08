import React from "react";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left - Logo */}
      <div className="navbar-left">
        <div className="logo-box">CB</div>
        <span className="brand-name">CivilBuild</span>
      </div>

      {/* Center - Search */}
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search cement, bricks, steel..."
          className="search-input"
        />
      </div>

      {/* Right - Buttons */}
      <div className="navbar-right">
        <button className="btn-outline">Sign Up</button>
        <button className="btn-filled">Sign In</button>
      </div>

      <div className="cart">
        <FaShoppingCart size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
