import Button from "../MainComponent/Button";
import React, { useState } from "react";

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

export function SideMenu() {
    const handleButtonClick = (buttonName) => {
      console.log(`Knapp ${buttonName} Clicked`);
    };

    return (
      <div className="sidebar">
        <button
          label="Click Tag BTN"
          onClick={() => handleButtonClick("Click Tag BTN")}
        />
        <button
          label="Click Tag BTN"
          onClick={() => handleButtonClick("Click Tag BTN")}
        />
        <button
          label="Click Tag BTN"
          onClick={() => handleButtonClick("Click Tag BTN")}
        />
      </div>
    );
  }

export default Sidebar;
export default SideMenu;
