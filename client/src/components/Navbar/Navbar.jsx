import React from "react";
import "./Navbar.scss";

export default function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper navbar teal darken-4">
                <a href="/" className="brand-logo">
                    mern Todo App
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="sass.html">Войти</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
