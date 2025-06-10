import React from "react";
import "../components/style.css";
import { Link } from "react-router-dom";

const Signup = () => {
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
            <h2>Sign Up</h2>
            <p className="login-subtext">
              Start your construction journey with us
            </p>
            <form>
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ flex: 1 }}>
                  <label>First Name</label>
                  <input type="text" placeholder="John" />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>

              <label>Email</label>
              <input type="text" placeholder="Contractor@example.com" />

              <label>Phone Number</label>
              <input type="text" placeholder="+91 7720081364" />

              <label>Business Type</label>
              <input type="text" placeholder="Select Your Business Type" />

              <label>Password</label>
              <input type="password" placeholder="Create a Strong Password" />

              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Your Password" />

              <div style={{ margin: "15px 0" }}>
                <label>
                  <input type="checkbox" style={{ marginRight: "8px" }} />I
                  agree to the Terms of Services and Privacy Policy
                </label>
              </div>

              <button type="submit" className="signin-btn">
                Create Account
              </button>

              <div className="footer">
                <p>
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="create-link">Sign In</span>
                  </Link>
                </p>
                <Link to="/">
                  <p className="back-link">← Back To HomePage</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
