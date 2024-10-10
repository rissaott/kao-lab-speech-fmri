import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import pixelHeart from '../assets/pixel-heart.png'; // Ensure you have this image
import '../App.css';

const Things = () => {
    const notes = [
        "Thing 1: Remember to buy milk.",
        "Thing 2: Finish the React project.",
        "Thing 3: Schedule dentist appointment.",
        "Thing 4: Call mom.",
        "Thing 5: Read a book.",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % notes.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + notes.length) % notes.length);
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
                    <h2>{notes[currentIndex]}</h2>
                </div>
                <button onClick={handleNext} className="nav-button">Next &gt;</button>
            </div>
        </>
    );
};

export default Things;
