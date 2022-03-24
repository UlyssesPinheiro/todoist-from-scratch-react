import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="" alt="Todoist"></img>
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}