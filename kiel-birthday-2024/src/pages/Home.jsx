import { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported
import pixelHeart from '../assets/pixel-heart.png';
import '../App.css';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Happy Birthday Kiel!</h1>
      <Link to="/notes"> {/* Wrap the image in a Link */}
        <img src={pixelHeart} width={200} alt="Pixel Heart" />
      </Link>
    </>
  );
};

export default Home;
