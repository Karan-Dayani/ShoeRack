import React, { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import "./home.css";
import homeAboutImg from "../assets/images/home-about-img.jpg";
import { getShoes } from "../api";
import Cards from "../Components/Cards";

export function loader() {
    return defer({ shoes: getShoes()})
}

export default function Home() {
    const shoesObj = useLoaderData()

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

            <div className="about-section">
                <img src={homeAboutImg} alt="shoe-image" />
                <div className="about-info">
                    <p>ABOUT US</p>
                    <h1 className="about-title">Selected materials designed for comfort and sustainability</h1>
                    <p className="about-text">Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna.</p>
                    <Link to="/about">READ MORE</Link>
                </div>
            </div>

            <div className="best-seller">
                <h1>Our Best Seller</h1>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Await resolve={shoesObj.shoes}>
                        {(shoes) => {
                            const shuffled = shoes.sort(() => 0.5 - Math.random());
                            const bestArr = shuffled.slice(0, 6);
                            return <Cards data={bestArr} />
                        }}
                    </Await>
                </Suspense>
            </div>
            
            <h1>Hallo Everynian</h1>
        </>
    )
}