import Carousel from 'react-bootstrap/Carousel'

// IMAGES
// import HangLooseWebHome from '../images/HangLooseWebHome.png'
// import WorkItOut from '../images/WorkItOut.png'
// import HLM from '../images/HLM.gif'
// import HLM from '../images/HLM.mp4'

import Portfolio1 from '../images/PortfolioPic (1).jpg'
import Portfolio2 from '../images/PortfolioPic (2).jpg'
import Portfolio3 from '../images/PortfolioPic (3).jpg'
import Portfolio4 from '../images/PortfolioPic (4).jpg'
import Portfolio5 from '../images/PortfolioPic (5).jpg'
import Portfolio6 from '../images/PortfolioPic (6).jpg'
import Portfolio7 from '../images/PortfolioPic (7).jpg'
import Portfolio8 from '../images/PortfolioPic (8).jpg'
import Portfolio9 from '../images/PortfolioPic (9).jpg'
import Portfolio10 from '../images/PortfolioPic (10).jpg'
import Portfolio11 from '../images/PortfolioPic (11).jpg'
import Portfolio12 from '../images/PortfolioPic (12).jpg'
import Portfolio13 from '../images/PortfolioPic (13).jpg'
import Portfolio14 from '../images/PortfolioPic (14).jpg'
import Portfolio15 from '../images/PortfolioPic (15).jpg'
import Portfolio16 from '../images/PortfolioPic (16).jpg'
import Portfolio17 from '../images/PortfolioPic (17).jpg'
import Portfolio18 from '../images/PortfolioPic (18).jpg'
import Portfolio19 from '../images/PortfolioPic (19).jpg'


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
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio2 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio3 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio4 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio5 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio6 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio7 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio8 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio9 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio10 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio11 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio12 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio13 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio14 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio15 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio16 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio17 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio18 }
                        alt="First Slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Portfolio19 }
                        alt="First Slide"
                        />
                </Carousel.Item>

                

            </Carousel>
        </main>
    )
}