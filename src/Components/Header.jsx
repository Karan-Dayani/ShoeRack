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
                >ABOUT</NavLink>
                
                <Link
                    className="cart"
                >CART</Link>

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