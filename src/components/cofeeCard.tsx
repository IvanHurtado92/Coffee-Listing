import './cofeeCard.css'
import { Coffee } from '../models/Coffee'

export function CoffeeCard ({
  popular,
  image,
  name,
  price,
  rating,
  votes,
  available
}: Coffee) {
  return (
    <div className="cofee-card">
      <div className="imgContainer" style={{ backgroundImage: `url(${image})` }}>
        {popular && <p className='isPopular'>Popular</p>}
      </div>
      <div className="data">
        <div className="product">
          <p>{name}</p>
          <div id='price'>
            <p style={{ color: "black" }}>{price}</p>
          </div>
        </div>
        <div className="details">
        <p id='reviews'>⭐{rating}<span id='votes'>({votes} votes)</span></p>
        <p id='availability'>{available ? '' : 'Sold out'}</p>
        </div>
      </div>
    </div>
  )
};

export default CoffeeCard