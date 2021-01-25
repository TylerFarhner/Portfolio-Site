import Carousel from 'react-bootstrap/Carousel'
import HangLooseWebHome from '../../images/HangLooseWebHome.png'
import WorkItOut from '../../images/WorkItOut.png'

import './Carousel.css'

export default function CarouselComponent(){
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ HangLooseWebHome }
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>HangLoose (Web)</h3>
                <p>Online community maintained database of hammocking locations</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ WorkItOut }
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Work It Out</h3>
                <p>Basic index of workouts based off muscle group!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}