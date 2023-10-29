import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

    const [hamClass, setHamClass] = React.useState("ham-menu")

    function toggleMenu() {
        setHamClass(prevClass => (prevClass === "ham-menu" ? "ham-menu display-flex" : "ham-menu"))
    }

    return (
        <>
            <header>
                <Link className="site-logo" to="/">SHOE RACK</Link>
                <div className="left">
                    <NavLink
                        className={({isActive}) => isActive ? "active-link" : null}
                        to="/mens"
                    >MEN</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? "active-link" : null}
                        to="/womens"
                    >WOMEN</NavLink>
                </div>
                <NavLink
                    className={({isActive}) => isActive ? "active-link" : null}
                    id="about"
                    to="/about"
                >OUR STORY</NavLink>

                <Link
                    className="cart"
                    to="/cart"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                </Link>

                <div className="toggle-button" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </header>
            <div className={hamClass}>
                <NavLink
                    onClick={toggleMenu}
                    to="/mens"
                >MEN</NavLink>
                <NavLink
                    onClick={toggleMenu}
                    to="/womens"
                >WOMEN</NavLink>
                <NavLink
                    onClick={toggleMenu}
                    to="/about"
                >ABOUT</NavLink>
            </div>
        </>
    )
}