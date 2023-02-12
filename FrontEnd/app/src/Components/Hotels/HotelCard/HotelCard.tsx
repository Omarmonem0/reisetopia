import { FC } from 'react';
import { Link } from 'react-router-dom';
import './HotelCard.css';

export interface HotelCardProps {
    id: number,
    image: {
        url: string,
        caption: string
    }
    name: string,
    address: string,
    distanceToCenter: number
}

const HotelCard: FC<HotelCardProps> = ({ image , name, address, distanceToCenter, id }) => {
    return (
        <Link to={`hotels/${id}`} className='HotelCardContainer' >
            <div className='HotelImageSection'>
                <img src={image.url} alt={image.caption} />
            </div>
            <div className='HotelInfoSection'>
                <span>{name}</span>
                <span>Address: {address}</span>
                <span>Distance to center: {distanceToCenter} km</span>
            </div>
        </Link>
    );
};

export default HotelCard;