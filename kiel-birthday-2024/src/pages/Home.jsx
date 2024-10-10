import { Link } from 'react-router-dom';
import pixelHeart from '../assets/pixel-heart.png';
import '../App.css';

const Home = () => {
    return (
        <>
            <h1>Happy Birthday Kiel!</h1>
            <div className="hearts-container">
                <div className="heart">
                    <Link to="/notes">
                        <img src={pixelHeart} className="heart-image" alt="Pixel Heart" />
                    </Link>
                    <div className="heart-text">from friends</div>
                </div>
                <div className="heart">
                    <Link to="/photos">
                        <img src={pixelHeart} className="heart-image" alt="Pixel Heart" />
                    </Link>
                    <div className="heart-text">from me</div>
                </div>
                <div className="heart">
                    <Link to="/things">
                        <img src={pixelHeart} className="heart-image" alt="Pixel Heart" />
                    </Link>
                    <div className="heart-text">things</div>
                </div>
            </div>
        </>
    );
};

export default Home;
