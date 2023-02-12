import { FC } from "react"
import { IDetailsPageHotel } from "../../../Store/type"
import Slider from "../../Slider/Slider"
import'./DetailsCard.css'


interface DetailsCardProps {
    hotel: IDetailsPageHotel
}

const DetailsCard: FC<DetailsCardProps> = ({hotel}) => {
    return (
        <div className="DetailsCard">
            <Slider images={hotel.images}></Slider>
            <strong>{hotel.name}</strong>
            <p>{hotel.address}</p>
            <p>{hotel.description}</p>
            {
                hotel.deals.map((deal) =>
                    (<div>
                        <p>{deal.headline}</p>
                        <p>{deal.details}</p>
                    </div>)
                )
            }
        </div>
    )
}

export default DetailsCard