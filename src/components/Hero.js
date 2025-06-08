import React from "react";
import "./style.css";
import { CiClock2 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { LuPackageCheck } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Build your dreams <br /> faster than ever
          </h1>
          <p>
            Premium construction materials delivered to your site in hours not
            days.
          </p>
          <div className="features">
            <div className="icons">
              <CiClock2 className="icon" />
              <>2 hour delivery</>
            </div>
            <div className="icons">
              <div>
                <FaCheck className="icon" />
              </div>
              <>Quality assured</>
            </div>
            <div className="icons">
              <LuPackageCheck className="icon" />
              <>Site delivery</>
            </div>
          </div>
          <button className="hero-btn">Start Building Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
