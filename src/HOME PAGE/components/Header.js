import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>GUARDIAN</h3>
            <h1>Cab Management</h1>
            <p>
              Your conviniences,our Responsibility!
            </p>
            <div className="banner__btn">
              <Link to='/About' className="btn btn-smart">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
