import './cofeeCard.css'
import { Coffee } from '../models/Coffee'

export function CoffeeCard ({
  available,
  image,
  name,
  price,
  rating,
  votes
}: Coffee) {
  return (
    <div className="cofee-card">
      <div className="imgContainer" style={{ backgroundImage: `url(${image})` }}>
        {available && <p className='isPopular'>Popular</p>}
      </div>
      <div className="data">
        <div className="product">
          <p>{name}</p>
          <div id='price'>
            <p style={{ color: "black" }}>{price}</p>
          </div>
        </div>
        <p id='reviews'>⭐{rating}<span id='votes'>({votes} votes)</span></p>
      </div>
    </div>
  )
};

export default CoffeeCard