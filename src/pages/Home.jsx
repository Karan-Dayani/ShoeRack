import React from "react";
import "./home.css"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="intro-img">
                <div className="intro-info">
                    <h1 className="intro-title">Love the Planet we walk on</h1>
                    <p className="intro-text">Bibendum fermentum, aenean donec pretium aliquam blandit <br /> tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.</p>
                    <div className="intro-btns">
                        <Link className="btn" to="/mens">SHOP MEN</Link>
                        <Link className="btn" to="/womens">SHOP WOMEN</Link>
                    </div>
                </div>
            </div>
            <h1>Hallo Everynian</h1>
        </>
        
    )
}