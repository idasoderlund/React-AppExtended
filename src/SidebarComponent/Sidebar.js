import React, { useState } from "react";

function Sidebar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <aside className="asidemenu">
      <div
        className="responsiveMenu2"
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

      <ul className={`sidebarlist ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#bookedsessions">My Booked Sessions</a>
        </li>
        <li>
          <a href="#mystatistic">My Statistic</a>
        </li>
        <li>
          <a href="#notes">My WorkOut Notes</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
