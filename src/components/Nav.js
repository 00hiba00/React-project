import React from "react";

import "./Nav.css";
function Nav(){
    return(
        <nav className="nav-grid">
                <img src="./lemonlogo.png" className="logo"></img>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Menu</a>
                <a href="">Reservations</a>
                <a href="">Order online</a>
                <a href="">Login</a>
        </nav>
    );
}

export default Nav;