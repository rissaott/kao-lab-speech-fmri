import { useState } from 'react';
import { Link } from 'react-router-dom';
import pixelHeart from '../assets/pixel-heart.png';
import seesaw from '../assets/seesaw.png';
import goingOut from '../assets/going-out.png';
import '../App.css';

const handleGoHome = () => {
    window.location.href = '/'; // Adjust this based on your routing
};

const Photos = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <button className="home-button" onClick={handleGoHome}>
                <img src={pixelHeart} alt="Go Home" />
            </button>
            <h1>Photos</h1>
            <div className="polaroid-container">
                <div className="polaroid">
                    <img src={seesaw} width={200} height={200} className="polaroid-image" alt="Seesaw" />
                    <div className="polaroid-text">Seesaw - Note 1</div>
                </div>
                <div className="polaroid">
                    <img src={goingOut} width={200} height={200} className="polaroid-image" alt="Going Out" />
                    <div className="polaroid-text">Going Out - Note 1</div>
                </div>
                <div className="polaroid">
                    <Link to="/things">
                        <img src={pixelHeart} className="polaroid-image" alt="Pixel Heart" />
                    </Link>
                    <div className="polaroid-text">Pixel Heart - Note 2</div>
                </div>
            </div>

            {/* Spotify Widget */}
            <div className="spotify-widget">
                <h2>our jamz</h2>
                <iframe 
                    src="https://open.spotify.com/embed/playlist/5jGnkzynTIUFNjY65Z94TJ" 
                    width="300" 
                    height="380" 
                    frameBorder="0" 
                    allowTransparency="true" 
                    allow="encrypted-media"
                    title="Spotify Widget"
                ></iframe>
            </div>
        </>
    );
};

export default Photos;
