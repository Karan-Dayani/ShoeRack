import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
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
            <div>
                <NavLink
                    className={({isActive}) => isActive ? "active-link" : null}
                    to="/about"
                >ABOUT</NavLink>
                <NavLink
                    className="cart"
                >CART</NavLink>
            </div>
        </header>
    )
}