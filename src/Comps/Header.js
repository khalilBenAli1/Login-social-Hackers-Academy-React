import React from "react";
import logo from "./logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <header
        id="main-header"
        data-height-onload="92"
        data-height-loaded="true"
        data-fixed-height-onload="92"
      
      >
        <div className="container clearfix et_menu_container" bis_skin_checked="1">
          <div className="logo_container" bis_skin_checked="1">
            <span className="logo_helper"></span>
            <a href="https://talent.socialhackersacademy.org/">
              <img
                src="https://talent.socialhackersacademy.org/wp-content/uploads/2020/10/SHA-New-Website-Logo.png"
                width="1345"
                height="833"
                alt="Welcome to SHA"
                id="logo"
                data-height-percentage="79"
                data-actual-width="1345"
                data-actual-height="833"
              />
            </a>
          </div>
          <div
            id="et-top-navigation"
            data-height="77"
            data-fixed-height="77"
           
            bis_skin_checked="1"
          >
            <nav id="top-menu-nav">
              <ul id="top-menu" className="nav">
                <li
                  id="menu-item-79"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-79"
                >
                  <a href="https://talent.socialhackersacademy.org/welcome-to-sha-where-dev-talent-is-abundant/">
                    Home
                  </a>
                </li>
                <li
                  id="menu-item-366"
                  className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-292 current_page_item menu-item-366"
                >
                  <a
                    href="https://talent.socialhackersacademy.org/login-2/"
                    aria-current="page"
                  >
                    Login
                  </a>
                </li>
              </ul>{" "}
            </nav>
            <div id="et_mobile_nav_menu" bis_skin_checked="1">
              <div className="mobile_nav closed" bis_skin_checked="1">
                <span className="select_page">Select Page</span>
                <span className="mobile_menu_bar mobile_menu_bar_toggle"></span>
                <ul id="mobile_menu" className="et_mobile_menu">
                  <li
                    id="menu-item-79"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-79 et_first_mobile_item"
                  >
                    <a href="https://talent.socialhackersacademy.org/welcome-to-sha-where-dev-talent-is-abundant/">
                      Home
                    </a>
                  </li>
                  <li
                    id="menu-item-366"
                    className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-292 current_page_item menu-item-366"
                  >
                    <a
                      href="https://talent.socialhackersacademy.org/login-2/"
                      aria-current="page"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
