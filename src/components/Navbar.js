import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Left - Logo */}

      <div className="navbar-left" onClick={() => navigate("/")}>
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
        <button className="btn-filled" onClick={() => navigate("/login")}>
          Sign In
        </button>

        <button className="btn-outline" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>

      <div className="cart">
        <FaShoppingCart size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
