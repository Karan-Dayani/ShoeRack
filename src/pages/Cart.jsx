import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { getCart, removeCart } from "../api";
import Loading from "../Components/Loading";

export default function Cart() {
    const [shoes, setShoes] = React.useState([])
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        async function loadCart() {
            const data = await getCart();
            setShoes(data);
            setLoading(false);
        }
        loadCart();
    }, [loading])

    function handleRemoveCart(id) {
        removeCart(id);
        setLoading(true);
    }

    let grandTotal = 0;

    if(loading) {
        return (
            <Loading />
        )
    }

    if (shoes.length === 0) {
        return (
            <div className="cart-empty-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#262b2c" className="bi bi-cart-x" viewBox="0 0 16 16">
                    <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z" />
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <h1>Opps! looks like the cart is empty</h1>
            </div>
        )
    } else {
        const cartItemsPC = shoes.map(shoe => {
            grandTotal += (shoe.price * shoe.quantity);
            return (
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
                    <td className="cart-prod-remove">
                        <svg onClick={() => handleRemoveCart(shoe.id)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </td>
                </tr>
            )
        })

        const cartItemsMob = shoes.map(shoe => {
            return (
                <div className="cart-item-mob" key={shoe.id}>
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
                    <div className="cart-prod-remove cart-prod-item">
                        <svg onClick={() => handleRemoveCart(shoe.id)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItemsPC}
                    </tbody>
                </table>

                <div className="cart-items-mob">
                    {cartItemsMob}
                </div>

                <div className="cart-footer">
                    <div className="cart-total">
                        <p>Grand Total</p>
                        <p>${grandTotal}</p>
                    </div>
                    <Link className="checkout-btn" to="/">CHECK OUT</Link>
                </div>
            </>
        )
    }
}