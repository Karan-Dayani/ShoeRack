import React from "react";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";

import "./Server.js"

import Layout from "./Components/Layout";

import Home, { loader as homeLoader} from "./pages/Home";

import Mens, { loader as mensShoesLoader} from "./pages/Mens";
import Womens, { loader as womensShoesLoader} from "./pages/Womens";

import About from "./pages/About";
import Cart from "./pages/Cart";

import ShoeDetail, {loader as shoeDetailLoader} from "./pages/ShoeDetail.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={homeLoader} />
        <Route path="/:id" element={<ShoeDetail />} loader={shoeDetailLoader} />

        <Route path="mens" element={<Mens />} loader={mensShoesLoader} />
        <Route path="mens/:id" element={<ShoeDetail />} loader={shoeDetailLoader} />

        <Route path="womens" element={<Womens />} loader={womensShoesLoader} />
        <Route path="womens/:id" element={<ShoeDetail />} loader={shoeDetailLoader} />

        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />}/>
    </Route>
))

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}