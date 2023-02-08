import { FC } from 'react';
import './HotelCard.css';

export interface HotelCardProps {
    image: {
        url: string,
        caption: string
    }
    name: string,
    address: string,
    distanceToCenter: number
}

const HotelCard: FC<HotelCardProps> = ({ image , name, address, distanceToCenter }) => {
    return (
        <div className='HotelCardContainer'>
            <div className='HotelImageSection'>
                <img src={image.url} alt={image.caption} />
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