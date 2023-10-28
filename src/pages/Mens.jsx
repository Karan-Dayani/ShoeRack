import React, { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import "./mens.css";
import { getShoes } from "../api";
import Cards from "../Components/Cards";

export function loader() {
    return defer({ shoes: getShoes("mens")})
}

export default function Mens() {
    const shoesObj = useLoaderData()

    return (
        <div className="men">
            <h1 className="men-title">Men</h1>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={shoesObj.shoes}>
                    {(shoes) => <Cards data={shoes} />}
                </Await>
            </Suspense>
        </div>
    )
}