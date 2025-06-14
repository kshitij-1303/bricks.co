import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-top">
        <div className="feature-footer">
          <div>
            <h3>Fast Site Delivery</h3>
          </div>
          <p>Direct delivery to your construction site with proper handling.</p>
        </div>
        <div className="feature-footer">
          <div>
            <h3>Quality Guaranteed</h3>
          </div>
          <p>All materials tested and certified for construction standards.</p>
        </div>
        <div className="feature-footer">
          <div>
            <h3>
              24/7 <span className="break"></span> Support
            </h3>
          </div>
          <p>Round-the-clock customer support for urgent requirements.</p>
        </div>
      </div>
      <footer className="footer">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">CB</div>
              <p>
                Your trusted partner for <br /> construction materials <br />{" "}
                delivery.
              </p>
            </div>

            {/* Products Section */}
            <div className="footer-section">
              <h4>Products</h4>
              <ul>
                <li>
                  <a href="#cement">Cement & Concrete</a>
                </li>
                <li>
                  <a href="#bricks">Bricks & Blocks</a>
                </li>
                <li>
                  <a href="#steel">Steel & Metals</a>
                </li>
                <li>
                  <a href="#sand">Sand & Aggregates</a>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#delivery">Site Delivery</a>
                </li>
                <li>
                  <a href="#bulk">Bulk Orders</a>
                </li>
                <li>
                  <a href="#testing">Quality Testing</a>
                </li>
                <li>
                  <a href="#support">Technical Support</a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="footer-contact">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="tel:1800-CIVILBUILD">1800-CIVILBUILD</a>
                </li>
                <li>
                  <a href="mailto:support@civilbuild.com">
                    support@civilbuild.com
                  </a>
                </li>
                <li>
                  <a href="#app">Download App</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
