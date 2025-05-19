import React, { useState } from "react";
import Header from "./HeaderComponent/Header";
import Navbar from "./NavbarComponent/Navbar";
import { Sidebar, SideMenu } from "./SidebarComponent/Sidebar";
import "./App.css";
import "./HeaderComponent/Header.css";
import "./NavbarComponent/Navbar.css";
import "./SidebarComponent/Sidebar.css";
import "./MainComponent/Button";
import PostList from "./MainComponent/PostList";
import Post from "./MainComponent/Post";

function GymApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="app-container">
      <Sidebar /> <SideMenu />
      <div className="navbarcomponent">
        <Navbar />

        <div className="headercomponent">
          <Header />
        </div>

        {isLoggedIn ? (
          <div>
            <section className="centeredcontent">
              <div className="post-container">
                <PostList />
              </div>
            </section>
          </div>
        ) : (
          <div>
            <p>Please Sign In to see your daily content.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GymApp;
