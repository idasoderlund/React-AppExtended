import React, { useState } from "react";
import { TagList } from "./TagList";

export function Sidebar() {
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

export function SideMenu() {
  return (
    <div className="button-container">
      <TagList />
    </div>
  );
}
