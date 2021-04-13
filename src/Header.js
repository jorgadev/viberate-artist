import React from "react";

import Menu from "./Menu";

export default function Header() {
  return (
    <header className="header">
      <div className="page">
        <a href="#" className="logo">
          <img src="./exercise-01_files/logo-v.svg" alt="Viberate" /> Viberate
        </a>

        <nav className="navigation-primary">
          <ul className="menu-sys">
            <li>
              <button className="btn btn-menu search">Search</button>
            </li>
            <li>
              <button className="btn btn-menu more">More</button>
            </li>
          </ul>
          {/* <li>
              <a href="">Artist 1</a>
            </li>
            <li>
              <a href="">Artist 2</a>
            </li>
            <li>
              <a href="">Artist 3</a>
            </li> */}
          <Menu />
        </nav>
      </div>
    </header>
  );
}
