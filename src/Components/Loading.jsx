import React from "react";
import "./loading.css";
import ProgressBar from "progressbar.js";

export default function Loading() {

    React.useEffect(() => {
        var bar = new ProgressBar.Line('#container', {
            easing: 'easeInOut',
            duration: 500
        });
        bar.animate(2);
    })

    return (
        <div id="container"></div>
    )
}