import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="applogo">Master Gym App</div>

      <div
        className="responsiveMenu"
        onClick={toggleMobileMenu}
        aria-label="toggle menu"
        aria-expanded={isMobileMenuOpen}
        role="button"
      >
        {/*Hamburgerstreck*/}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#home">Homepage</a>
        <a href="#myprofile">Profile</a>
        <a href="#settings">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;
