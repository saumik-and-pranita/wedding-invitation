import Image from 'react-bootstrap/Image';
import backgroundImage from '../../assets/background.jpg';
import './Background.css';

export function Background() {
  return (
    <div>
      <div className="background-img-text">
        <p className="background-img-text-heading">SAUMIK & PRANITA</p>
        <p className="background-img-text--sub-heading">Tying knot on - 3rd March, 2025</p>
      </div>
      <Image className="background-img" src={backgroundImage} />
    </div>
  );
}