import Carousel from 'react-bootstrap/Carousel'

// IMAGES
import HangLooseWebHome from '../images/HangLooseWebHome.png'
import WorkItOut from '../images/WorkItOut.png'


export default function GalleryPage(props) {
    return (
        <main className="GalleryPage">
            <h1>Gallery Page</h1>
            <Carousel >

                <Carousel.Item className="slide1">
                    <a href='https://workitout.netlify.app'>
                        <img
                        className="d-block w-100"
                        src={ WorkItOut }
                        alt="First slide"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://www.hanglooseseir.herokuapp.com">
                        <img
                        className="d-block w-100"
                        src={ HangLooseWebHome }
                        alt="Second slide"
                        />
                    </a>
                </Carousel.Item>

            </Carousel>
        </main>
    )
}