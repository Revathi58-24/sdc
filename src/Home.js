import React, { useState } from "react";
import './Home.css'; // Import CSS file for styling (create Home.css in the same directory as this component if not already existing)
import c1 from './assets/card1.webp'
import c2 from './assets/card2.webp'
import c3 from './assets/card3.webp'
import c4 from './assets/card4.webp'
import c5 from './assets/card5.webp'
import c6 from './assets/card6.webp'

const HomePage = () => {
    const [showAllCards, setShowAllCards] = useState(false);

    // Define cards to be displayed
    const cards = [
        { id: 1, image: c1, text: 'Large closet', price: '$689,950', details: '2 bds | 2 ba | 1,088 sqft | Active', address: '9210 B Roosevelt Way NE, Seattle, WA, 98115', mls: 'MLS JD=2210203, Gracie Thomas Listing promised by NWMMS' },
        { id: 2, image: c2, text: 'Rooftop deck', price: '$689,950', details: '2 bds | 2 ba | 1,088 sqft | Active', address: '9210 B Roosevelt Way NE, Seattle, WA, 98115', mls: 'MLS JD=2210203, Gracie Thomas Listing promised by NWMMS' },
        { id: 3, image: c3, text: 'Modern urban living', price: '$689,950', details: '2 bds | 2 ba | 1,088 sqft | Active', address: '9210 B Roosevelt Way NE, Seattle, WA, 98115', mls: 'MLS JD=2210203, Gracie Thomas Listing promised by NWMMS' },
        { id: 4, image: c4, text: 'Large closet', price: '$689,950', details: '2 bds | 2 ba | 1,088 sqft | Active', address: '9210 B Roosevelt Way NE, Seattle, WA, 98115', mls: 'MLS JD=2210203, Gracie Thomas Listing promised by NWMMS' },
        { id: 5, image: c5, text: 'Large closet', price: '$689,950', details: '2 bds | 2 ba | 1,088 sqft | Active', address: '9210 B Roosevelt Way NE, Seattle, WA, 98115', mls: 'MLS JD=2210203, Gracie Thomas Listing promised by NWMMS' },
        { id: 6, image: c6, text: 'Large closet', price: '$689,950', details: '2 bds | 2 ba | 1,088 sqft | Active', address: '9210 B Roosevelt Way NE, Seattle, WA, 98115', mls: 'MLS JD=2210203, Gracie Thomas Listing promised by NWMMS' }
    ];

    // Function to handle click on the show more button
    const handleShowMore = () => {
        setShowAllCards(true);
    }

    // Function to render the cards based on the showAllCards state
    const renderCards = () => {
        if (!showAllCards) {
            return cards.slice(0, 3).map(card => (
                <div className="card" key={card.id}>
                    <img src={card.image} alt="Card" />
                    <div className="overlay-text">{card.text}</div>
                    <div className="card-text">
                        <h3>{card.price}</h3>
                        <p style={{fontSize:'17px'}}>{card.details}</p>
                        <p style={{fontSize:'16px'}}>{card.address}</p>
                        <p style={{fontSize:'10px'}}>{card.mls}</p>
                    </div>
                </div>
            ));
        } else {
            return cards.map(card => (
                <div className="card" key={card.id}>
                    <img src={card.image} alt="Card" />
                    <div className="overlay-text">{card.text}</div>
                    <div className="card-text">
                        <h3>{card.price}</h3>
                        <p>{card.details}</p>
                        <p>{card.address}</p>
                        <p>{card.mls}</p>
                    </div>
                </div>
            ));
        }
    }

    return (
        <div className="home-page">
            <div className="con">
                <h2>Homes for you</h2>
                <p>Based on homes you recently viewed <div className="symbol-wrapper"><span className="symbol">&lt;</span> <span className="symbol">&gt;</span></div></p>
            </div>
            <div className="cards-container">
                {renderCards()}
            </div>
            {!showAllCards && <button className="show-more-button" onClick={handleShowMore}></button>}
        </div>
    );
    
}

export default HomePage;
