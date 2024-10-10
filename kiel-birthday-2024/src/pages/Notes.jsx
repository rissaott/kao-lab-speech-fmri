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
        <h1>you are such a light in everyone's life.</h1>
        <h2>don't believe me? here are some birthday wishes from your friends :)</h2>
        <div className="note-cards-container">
            {notes.map((note, index) => (
                <div className="note-card" key={index}>
                    <h2>{note.text}</h2>
                    <h2 style={{ color: 'darkblue' }}>- {note.name}</h2>
                </div>
            ))}
        </div>
        </>
    );
};

export default Notes;
