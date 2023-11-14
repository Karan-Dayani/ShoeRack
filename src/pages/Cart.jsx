import React, { Suspense } from "react";
import "./cart.css";
import { defer, Await, useLoaderData, Link } from "react-router-dom";
import { getCart } from "../api";
import Loading from "../Components/Loading";

export function loader() {
    return defer({ shoes: getCart() })
}

export default function Cart() {
    const data = useLoaderData()
    let grandTotal = 0;
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Await resolve={data.shoes}>
                    {(shoes) => {
                        if (shoes.length === 0) {
                            return (
                                <h1>Cart is empty</h1>
                            )
                        } else {
                            const cartitems = shoes.map(shoe => {
                                grandTotal += (shoe.price * shoe.quantity);
                                return (
                                    <>
                                        <tr className="cart-item-pc" key={shoe.id}>
                                            <td className="cart-prod-img">
                                                <div>
                                                    <img src={`/assets/ShoesImages/id-${shoe.id}.jpg`} alt="" />
                                                </div>
                                            </td>
                                            <td className="cart-prod-name">{shoe.name}</td>
                                            <td className="cart-prod-price">${shoe.price}</td>
                                            <td className="cart-prod-quantity">{shoe.quantity}</td>
                                            <td className="cart-prod-subtotal">${shoe.price * shoe.quantity}</td>
                                        </tr>
                                        
                                        <div className="cart-item-mob">
                                            <div className="cart-prod-img">
                                                <img src={`/assets/ShoesImages/id-${shoe.id}.jpg`} alt="" />
                                            </div>
                                            <div className="cart-prod-name cart-prod-item">
                                                <p>{shoe.name}</p>
                                            </div>
                                            <div className="cart-prod-price cart-prod-item">
                                                <p>${shoe.price}</p>
                                            </div>
                                            <div className="cart-prod-quantity cart-prod-item">
                                                <p>{shoe.quantity}</p>
                                            </div>
                                            <div className="cart-prod-subtotal cart-prod-item">
                                                <p>${shoe.price * shoe.quantity}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                            return (
                                <>
                                    <h1 className="cart-title">Cart</h1>

                                    <table className="cart-items-pc">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartitems}
                                        </tbody>
                                    </table>

                                    <div className="cart-items-mob">
                                        {cartitems}
                                    </div>

                                    <div className="cart-total">
                                        <p>Grand Total</p>
                                        <p>${grandTotal}</p>
                                    </div>
                                </>
                            )
                        }
                    }}
                </Await>
            </Suspense>
        </>
    )
}