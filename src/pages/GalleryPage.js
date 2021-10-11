import Carousel from 'react-bootstrap/Carousel'

// IMAGES
// import HangLooseWebHome from '../images/HangLooseWebHome.png'
// import WorkItOut from '../images/WorkItOut.png'
// import HLM from '../images/HLM.gif'
// import HLM from '../images/HLM.mp4'

import Portfolio1 from '../images/PortfolioPic (1).jpg'


export default function GalleryPage(props) {
    return (
        <main className="GalleryPage">
            <h1>Gallery</h1>
            <Carousel >

            {/* <Carousel.Item>
                    <a href="https://github.com/TylerFarhner/HLM" target="_blank" rel="noreferrer">
                        <img
                        className="d-block w-100"
                        src={ HLM }
                        alt="First Slide"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://www.hanglooseseir.herokuapp.com" target="_blank" rel="noreferrer">
                        <img
                        className="d-block w-100"
                        src={ HangLooseWebHome }
                        alt="Second slide"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item >
                    <a href='https://workitout.netlify.app' target="_blank" rel="noreferrer">
                        <img
                        className="d-block w-100"
                        src={ WorkItOut }
                        alt="Third slide"
                        />
                    </a>
                </Carousel.Item> */}

                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio1 }
                        alt="First Slide"
                        />
                </Carousel.Item>

                

            </Carousel>
        </main>
    )
}