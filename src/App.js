import React, { useState } from "react";
import Header from "./HeaderComponent/Header";
import Navbar from "./NavbarComponent/Navbar";
import { Sidebar, SideMenu } from "./SidebarComponent/Sidebar";
import "./App.css";
import "./HeaderComponent/Header.css";
import "./NavbarComponent/Navbar.css";
import "./SidebarComponent/Sidebar.css";
import "./MainComponent/Button";

function GymApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Exempel på koniditonell rendering

  return (
    <div className="app-container">
      <Sidebar /> <SideMenu />
      <div className="navbarcomponent">
        <Navbar />

        <div className="headercomponent">
          <Header />
        </div>

        <div className="main-content">
          {isLoggedIn ? (
            <div>
              <section className="centeredcontent">
                <h1>Sometimes a good workout is all the therapy you need!</h1>
              </section>
              <section>
                <h2 className="firstparagraph">Workout Schedule:</h2>
                <p id="scheduleparagraph">
                  <b>Monday:</b> Full leg day | <b>Tuesday:</b> Back/Shoulders
                  Workout | <b>Wednesday:</b> Full leg day <br /> <br />
                  <b>Thursday:</b> Restday! | <b>Friday:</b> Arm/Ab Workout |
                  <b>Saturday:</b> Full leg day | <b>Sunday:</b> Restday!
                </p>
              </section>
              <section>
                <h2 className="secondparagraph">Calorie Calculation:</h2>
                <p id="calorieparagraph">
                  <b>Daily Calories:</b> 2100 | <b>Daily Proteine Intake:</b>{" "}
                  158g | <b>Current Deficit/Surplus:</b> +300 Kcal Surplus
                </p>
              </section>
            </div>
          ) : (
            <div>
              <p>Please Sign In to see your daily content.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GymApp;
