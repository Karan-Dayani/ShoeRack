import React from "react";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";

import "./Server.js"

import Layout from "./Components/Layout";

import Home from "./pages/Home";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import About from "./pages/About";
import Cart from "./pages/Cart";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="mens" element={<Mens />} />
        <Route path="womens" element={<Womens />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
    </Route>
))

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}