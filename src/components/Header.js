import React from "react";
import "./Header.css"; // We'll create this CSS file

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="title">Little Lemon</h1>
        <h2 className="subtitle">Chicago</h2>
        <p className="description">
          Welcome to Little Lemon! Enjoy fresh, delicious meals in a cozy
          atmosphere.
        </p>
        <button className="reserve-btn">Reserve a Table</button>
      </div>
      <div className="header-right">
        <img
          src="lemonlogo.png"
          alt="Little Lemon"
          className="header-image"
        />
      </div>
    </header>
  );
}

export default Header;
