import { useState } from 'react';
import { Link } from 'react-router-dom';
import pixelHeart from '../assets/pixel-heart.png';
import seesaw from '../assets/seesaw.png';
import goingOut from '../assets/going-out.png';
import riu from '../assets/riu.png';
import dumbo from '../assets/dumbo.png';
import palace from '../assets/palace.png';

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
            <h1>dear kiel,</h1>
            <h2>happy birthday my love!</h2>
            <h2>you're probably thinking right now, oh WOW. she really made me a react website. what a fucking nerd. and you're right. but it's also because i'm a simp. I just love you so much and wanted to show you how much I appreciate you. you deserve all the love in the world. words cannot describe how much I appreciate you and how thankful I am to have you in my life. most importantly, I want to celebrate your wonderful presence of 21 years on this earth. you're so old now!! :) AND you are actually adorable. take a look!</h2>
            <div className="polaroid-container">
                <div className="polaroid">
                    <img src={seesaw} width={200} height={200} className="polaroid-image" alt="Seesaw" />
                    <div className="polaroid-text">silly kiel</div>
                </div>
                <div className="polaroid">
                    <img src={goingOut} width={200} height={200} className="polaroid-image" alt="Going Out" />
                    <div className="polaroid-text">drunk kiel</div>
                </div>
                <div className="polaroid">
                    <img src={riu} width={200} height={200} className="polaroid-image" alt="Going Out" />
                    <div className="polaroid-text">romantic kiel</div>
                </div>
                <div className="polaroid">
                    <img src={dumbo} width={200} height={200} className="polaroid-image" alt="Going Out" />
                    <div className="polaroid-text">good style kiel</div>
                </div>
                <div className="polaroid">
                    <img src={palace} width={200} height={200} className="polaroid-image" alt="Going Out" />
                    <div className="polaroid-text">traveler kiel</div>
                </div>
            </div>
            <h2>these polaroids really don't do you justice because your presence is just so lively and loving, but they capture a glimpse of all the joy you give. over the past 4 months of dating you and 1.5 years of knowing you, I am so grateful to have gotten to know you inside and out, and can confidently say you are the kindest, most genuine, caring person I know. you are so smart and loving and I truly do see such a beautiful future with you. I appreciate your honesty, how you don't compromise on your values, and I look up to you in so many ways that you don't even realize. you inspire me every day to be the best I can be and I see us growing together so much in the coming times. from the silly looks we exchange to the way you hold me, everything about you I simply adore. I want you to know how much you are loved and cared for, and I cannot wait for all the amazing memories we will continue to create. no react website will be big enough to fit in all my thoughts about how much I love you and I could go on and on about how amazing you are. You are the bestest person ever in the world and actually my favorite person of all time. I wish I could be there in person to celebrate with you, but I promise that we will have so so many opportunities to bond and share experiences, and I am so excited. I promise to always cherish you and love you for the wonderful person you are, and I am so happy that you have completed another revolution around the sun. I love you and miss you so much baby. live it up for 21 in spain!! (we can gamble when you're back hehe)</h2>
            <h1>love, carissa ❤️</h1>
            {/* Spotify Widget */}
            <div className="spotify-widget">
                <h2>now, time to start the party with some of our favorite jamz! :)</h2>
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
