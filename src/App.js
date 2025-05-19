import React, { useState } from "react";
import Header from "./HeaderComponent/Header";
import Navbar from "./NavbarComponent/Navbar";
import { Sidebar, SideMenu } from "./SidebarComponent/Sidebar";
import "./App.css";
import "./HeaderComponent/Header.css";
import "./NavbarComponent/Navbar.css";
import "./SidebarComponent/Sidebar.css";
import PostList from "./MainComponent/PostList";
import Post from "./MainComponent/Post";
import Footer from "./FooterComponent/Footer";
import "./FooterComponent/Footer.css";

function GymApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="components">
        <div className="navbarcomponent">
          <Navbar />
        </div>

        <div className="headercomponent">
          <Header />
        </div>

        {isLoggedIn ? (
          <div>
            <div className="grid-container">
              <div className="post-grid-column">
                <PostList />
              </div>
              <div className="btns-grid-column">
                <SideMenu />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>Please Sign In to see your daily content.</p>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default GymApp;
