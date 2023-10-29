import React from "react";
import "./reviewCard.css";

export default function ReviewCard(params) {
    return (
        <div className="review-card">
            <h1>⭐⭐⭐⭐⭐</h1>
            <h3>{params.review}</h3>
            <h2>{params.name}</h2>
        </div>
    )
}