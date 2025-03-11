import React from 'react';
import './cofeeCard.css';

interface CoffeeCardProps {
    coffeeName: string;
    price: number;
    reviews: number;
    votes: number;
    disponible: boolean;
    url?: string;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({coffeeName, price, reviews, votes, disponible, url}) => {
    return (
        <div className="cofee-card">
            <div className="imgContainer" style={{backgroundImage: `url(${url})`}}>
                {disponible && <p className='isPopular'>Popular</p>}
            </div>
            <div className="data">
                <div className="product">
                    <p>{coffeeName}</p>
                    <div id='price'>
                    <p style={{color: "black"}}>${price}</p>
                    </div>
                </div>
                <p id='reviews'>⭐{reviews}<span id='votes'>({votes} votes)</span></p>
            </div>
        </div>
    );
};

export default CoffeeCard;