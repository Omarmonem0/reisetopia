import { FC } from 'react';
import HotelCard, { HotelCardProps } from '../HotelCard/HotelCard';

export interface HotelsListProps {
    hotelCards: HotelCardProps[]
}

const HotelsList: FC<HotelsListProps> = ({ hotelCards }) => {
    return (
        <>
            {
                hotelCards.map((card) => <HotelCard {...card} />)
            }
        </>
    );
};

export default HotelsList;