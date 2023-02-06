import { FC } from 'react';
import './HotelCard.css';

export interface HotelCardProps {
    imageUrl: string,
    name: string,
    address: string,
    distanceToCenter: number
}

const HotelCard: FC<HotelCardProps> = ({ imageUrl, name, address, distanceToCenter }) => {
    return (
        <div className='HotelCardContainer'>
           <div className='HotelImageSection'>
                <img src={imageUrl} />
           </div>
           <div className='HotelInfoSection'>
                <span>{name}</span>
                <span>Address: {address}</span>
                <span>Distance to center: {distanceToCenter}</span>

           </div>
        </div>
    );
};

export default HotelCard;