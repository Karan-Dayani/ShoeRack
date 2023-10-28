import React, { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import "./womens.css";
import { getShoes } from "../api";
import Cards from "../Components/Cards";

export function loader() {
    return defer({ shoes: getShoes("womens")})
}

export default function Mens() {
    const shoesObj = useLoaderData()

    return (
        <div className="women">
            <h1 className="women-title">Women</h1>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={shoesObj.shoes}>
                    {(shoes) => <Cards data={shoes} />}
                </Await>
            </Suspense>
        </div>
    )
}