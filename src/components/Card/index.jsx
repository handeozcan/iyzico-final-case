import { Link } from 'react-router-dom';
import { images } from '../../config/imagesConfig';
import '../../assets/styles/card.css';

export default function StarShipCard({ image, name, id, model }) {
  return (
    <Link to={`/starships/${id}`}>
      <div className="containerMain">
        <div className="wrap">
          <div className="card-wrap">
            <div className="card bloc1">
              <div className="text">
                <h3>{name}</h3>
                <p>{model}</p>
              </div>
              <div className="bloc2" style={{ backgroundImage: `url(${images[image]})` }} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
