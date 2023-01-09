import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Navbar.scss";

export default function Navbar() {
    const { logOut, isLogin } = useContext(Context);

    return (
        <nav>
            <div className="nav-wrapper navbar teal darken-4">
                <Link href="/" className="brand-logo">
                    mern Todo App
                </Link>
                {isLogin ? (
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link href="/" onClick={logOut}>Выйти</Link>
                        </li>
                    </ul>
                ) : (
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link href="/">Войти</Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
