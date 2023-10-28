import React from "react";
import "./card.css";

export default function Cards(params) {

    const card = params.data.map(shoe => (
        <div key={shoe.id} className="card">
            <div className="image-div">
                <img src={`/ShoesImages/id-${shoe.id}.jpg`} alt="shoe-img" className="card-img" />
            </div>
            <div className="card-info">
                <h1>{shoe.name}</h1>
                <p>{`$${shoe.price}`}</p>
            </div>
        </div>
    ))

    return (
        <div className="cards">
            {card}
        </div>
    )
}