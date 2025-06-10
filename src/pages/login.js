import React from "react";
import { Link } from "react-router-dom";
import "../components/style.css";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="left-section">
          <div className="logo">
            <div className="logo-icon">CB</div>
            <div>
              <h2 className="brand-name">CivilBuild</h2>
              <p className="subtitle">Construction Materials</p>
            </div>
          </div>
          <h1 className="welcome-heading">Welcome Back, Builder!</h1>
          <p className="welcome-subtext">
            Continue building your projects with premium materials delivered
            fast.
          </p>

          <div className="feature">
            <span className="feature-icon">🚚</span>
            <div>
              <h4>Fast Site Delivery</h4>
              <p>
                Direct delivery to your construction site with proper handling
              </p>
            </div>
          </div>

          <div className="feature">
            <span className="feature-icon">✅</span>
            <div>
              <h4>Quality Guaranteed</h4>
              <p>
                All materials tested and certified for construction standards
              </p>
            </div>
          </div>

          <div className="feature">
            <span className="feature-icon">⏰</span>
            <div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock customer support for urgent requirements</p>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="login-box">
            <h2>Sign In</h2>
            <p className="login-subtext">
              Access your construction materials dashboard
            </p>
            <form>
              <label>Email or Phone</label>
              <input type="text" placeholder="Contractor@example.com" />

              <label>Password</label>
              <div className="password-field">
                <input type="password" placeholder="Enter Your Password" />
                <span className="eye-icon">👁️</span>
              </div>

              <p className="forgot">Forgot Password?</p>
              <button type="submit" className="signin-btn">
                Sign In
              </button>

              <div className="footer">
                <p>
                  New to CivilBuild?{" "}
                  <Link to="/signup">
                    <span className="create-link">Create Account</span>
                  </Link>
                </p>
                <p className="back-link">← Back To HomePage</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
