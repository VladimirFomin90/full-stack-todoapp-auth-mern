import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper navbar teal darken-4">
                <Link href="/" className="brand-logo">
                    mern Todo App
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link href="sass.html">Войти</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
