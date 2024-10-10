import React from 'react';
import '../App.css';
import notes from './notesData'; // Adjust the path as needed
import pixelHeart from '../assets/pixel-heart.png';

const handleGoHome = () => {
    // Add your logic to go back home, e.g., redirecting to a specific route
    window.location.href = '/'; // Adjust this based on your routing
};

const Notes = () => {
    return (
        <>
        <button className="home-button" onClick={handleGoHome}>
            <img src={pixelHeart} alt="Go Home" />
        </button>
        <h1>look at how many people love you!</h1>
        <div className="cards-container">
            {notes.map((note, index) => (
                <div className="card" key={index}>
                    <h2>{note.text}</h2>
                    <h2 style={{ color: 'darkblue' }}>- {note.name}</h2>
                </div>
            ))}
        </div>
        </>
    );
};

export default Notes;
