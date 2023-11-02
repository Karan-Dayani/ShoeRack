import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

export default function About() {
    return (
        <div className="about">

            <div className="about-heading">
                <h1>Our Story</h1>
                <p>Taking a stylish and sustainable footwear with a focus on creating a positive impact on both the world and the people</p>
            </div>
            
            <div className="about-video">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=rcfw1l2FVpjQheQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
            <div className="about-product">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M23.944,12.669l-3.031-8.66c-.42-1.202-1.559-2.01-2.832-2.01h-5.081V1c0-.552-.447-1-1-1s-1,.448-1,1v1H5.919c-1.273,0-2.412,.808-2.832,2.009L.056,12.669c-.037,.106-.056,.632-.056,.632,0,2.506,1.871,4.567,4.26,4.692,1.241,.069,2.434-.371,3.338-1.229,.892-.846,1.402-2.036,1.402-3.264,0,0-.021-.732-.061-.842L5.794,4.008c.041-.005,.083-.008,.125-.008h5.081V22H5c-.553,0-1,.448-1,1s.447,1,1,1h14c.553,0,1-.448,1-1s-.447-1-1-1h-6V4h5.081c.042,0,.084,.002,.125,.008l-3.146,8.65c-.04,.109-.061,.842-.061,.842,0,1.229,.511,2.418,1.402,3.264,.845,.802,1.828,1.229,3.339,1.229,2.391,0,4.259-2.186,4.259-4.692,0,0-.019-.526-.056-.632ZM4.364,15.997c-1.081-.057-1.986-.902-2.266-1.997H6.95c-.1,.499-.35,.954-.729,1.313-.502,.477-1.164,.719-1.856,.683Zm2.208-3.997H2.409l2.042-5.833,2.121,5.833Zm12.977-5.833l2.042,5.833h-4.163l2.121-5.833Zm.088,9.83c-.688,.036-1.354-.206-1.857-.683-.379-.36-.629-.815-.729-1.313h4.852c-.28,1.094-1.184,1.94-2.265,1.997Z"/></svg>
                    <h2 className="about-prod-head">Ethics and equality</h2>
                    <p className="about-prod-text">Pellentesque quam convallis massa enim, faucibus ornare sollicitudin gravida justo sit suspendisse pellentesque.</p>
                </div>
                <div>
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22,3.41l-.12-1.26-1.2.4a13.84,13.84,0,0,1-6.41.64,11.87,11.87,0,0,0-6.68.9A7.23,7.23,0,0,0,3.3,9.5a9,9,0,0,0,.39,4.58,16.6,16.6,0,0,1,1.18-2.2A9.85,9.85,0,0,1,8.94,8.45a11.16,11.16,0,0,1,5.06-1v0A12.08,12.08,0,0,0,9.34,9.2a9.48,9.48,0,0,0-1.86,1.53,11.38,11.38,0,0,0-1.39,1.91,16.39,16.39,0,0,0-1.57,4.54A26.42,26.42,0,0,0,4,22H6a30.69,30.69,0,0,1,.59-4.32,9.25,9.25,0,0,0,4.52,1.11,11,11,0,0,0,4.28-.87C23,14.67,22,3.86,22,3.41Z"/></svg>
                    <h2 className="about-prod-head">Eco-design</h2>
                    <p className="about-prod-text">Pellentesque quam convallis massa enim, faucibus ornare sollicitudin gravida justo sit suspendisse pellentesque.</p>
                </div>
                <div>
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17,14a5,5,0,0,0,2.71-.81L20,13a3.16,3.16,0,0,0,.45-.37l.21-.2a4.48,4.48,0,0,0,.48-.58l.06-.08a4.28,4.28,0,0,0,.41-.76,1.57,1.57,0,0,0,.09-.23,4.21,4.21,0,0,0,.2-.63l.06-.25A5.5,5.5,0,0,0,22,9V2L19,5H15L12,2V9A5,5,0,0,0,17,14Zm2-7a1,1,0,1,1-1,1A1,1,0,0,1,19,7ZM15,7a1,1,0,1,1-1,1A1,1,0,0,1,15,7Z"/><path d="M11,22V17H8v5H5V11.9a3.49,3.49,0,0,1-2.48-1.64A3.59,3.59,0,0,1,2,8.5,3.65,3.65,0,0,1,6,5,1.89,1.89,0,0,0,8,3,1,1,0,0,1,9,2H9a1,1,0,0,1,1,1A3.89,3.89,0,0,1,6,7C4.19,7,4,8.16,4,8.51S4.18,10,6,10h5.09A6,6,0,0,0,19,14.65V22H16V17H14v5Z"/></svg>
                    <h2 className="about-prod-head">Wildlife Preservation</h2>
                    <p className="about-prod-text">Pellentesque quam convallis massa enim, faucibus ornare sollicitudin gravida justo sit suspendisse pellentesque.</p>
                </div>
            </div>
        </div>
    )
}