import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Image } from '../../Store/type';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Slider.css'

interface SliderProps {
    images: Image[]
}

const Slider: FC<SliderProps> = ({ images }) => {
    return (
        <Carousel autoPlay>
            {
                images.map((image: Image) =>
                    (<div>
                        <img alt={image.caption} src={image.url} />
                    </div>)
                )
            }
        </Carousel>
    )
}
export default Slider
