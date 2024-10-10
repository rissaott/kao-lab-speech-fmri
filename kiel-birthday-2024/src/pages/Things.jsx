import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import pixelHeart from '../assets/pixel-heart.png'; // Ensure you have this image
import things from './thingsData'; // Import the things data
import '../App.css';

const Things = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % things.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + things.length) % things.length);
    };

    return (
        <>     
            <button className="home-button" onClick={() => window.location.href = '/'}>
                <img src={pixelHeart} className="heart-image" alt="Go Home" />
            </button>
            <h1>21 Things I Love About You</h1>
            <div className="card-container">
                <button onClick={handlePrevious} className="nav-button">&lt; Previous</button>
                <div className="card">
                    <h2 style={{ color: 'darkblue' }}>Thing {things[currentIndex].id}:</h2>
                    <h2>{things[currentIndex].note}</h2>
                </div>
                <button onClick={handleNext} className="nav-button">Next &gt;</button>
            </div>
        </>
    );
};

export default Things;
