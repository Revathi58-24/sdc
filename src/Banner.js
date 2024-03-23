import React from "react";
import ban from './assets/Banner image.webp';
import './Banner.css'; // Import CSS file for styling (create Banner.css in the same directory as this component if not already existing)

const Banner = () => {
    return (
        <div className="banner-container">
            <img src={ban} className="banner-image" alt="Banner" />
            <div className="content">
                <h1 style={{ fontFamily: 'Arial, sans-serif' }}>Agents.Tours.Loans.Homes</h1>
                <div className="search-box">
                    <input type="text" placeholder="Enter an address, neighborhood, city or ZIP code" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="blue"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-search">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Banner;
