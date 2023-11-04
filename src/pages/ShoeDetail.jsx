import React, { Suspense } from "react";
import "./shoeDetail.css"
import { useLoaderData, defer, Await} from "react-router-dom";
import { getShoe } from "../api";
import Loading from "../Components/Loading";

export function loader({ params }) {
    return defer({shoe: getShoe(params.id)})
}

export default function ShoeDetail() {
    const shoe = useLoaderData()
    const [quantity, setQuantity] = React.useState(1)

    function decQuan() {
        quantity > 1 ? setQuantity(quantity-1) : setQuantity(quantity)
    }

    function incQuan() {
        setQuantity(quantity+1)
    }

    return (
        <Suspense fallback={<Loading />}>
            <Await resolve={shoe.shoe}>
                {(shoe) => (
                    <div className="shoe-detail-page">
                        <div className="shoe-detail-container">
                            <div className="shoe-detail-img-div">
                                <img src={`/assets/ShoesImages/id-${shoe.id}.jpg`} alt="shoe-img" className="shoe-detail-img" />
                            </div>
                            <div className="shoe-detail-right">
                                <div className="shoe-detail-info">
                                    <p className="info-brand">{shoe.brand}</p>
                                    <h1 className="info-name">{shoe.name}</h1>
                                    <h1 className="info-price">{`$${shoe.price}`}</h1>
                                    <p className="info-description">Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.</p>
                                </div>
                                <div className="shoe-buy">
                                    <div className="quantity-count">
                                        <span className="decrease" onClick={decQuan}>-</span>

                                        <span className="quantt">{quantity}</span>

                                        <span className="increase" onClick={incQuan}>+</span>
                                    </div>
                                    <button className="add-cart-btn">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Await>
        </Suspense>
    )
}