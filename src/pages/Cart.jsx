import React, { Suspense } from "react";
import { defer, Await, useLoaderData } from "react-router-dom";
import { getCart } from "../api";
import Loading from "../Components/Loading";

export function loader() {
    return defer({ shoes: getCart()})
}

export default function Cart() {
    const data = useLoaderData()
    return (
        <>
            <h1>Cart page goes here...</h1>
            <Suspense fallback={<Loading />}>
                <Await resolve={data.shoes}>
                    {(shoes) => {
                        console.log(shoes)
                    }}
                </Await>
            </Suspense>
        </>
    )
}