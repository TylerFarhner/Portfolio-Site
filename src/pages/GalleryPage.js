import Carousel from 'react-bootstrap/Carousel'

// IMAGES
import HangLooseWebHome from '../images/HangLooseWebHome.png'
import WorkItOut from '../images/WorkItOut.png'
// import HLM from '../images/HLM.mp4'


export default function GalleryPage(props) {
    return (
        <main className="GalleryPage">
            <h1>Gallery</h1>
            <Carousel >

                <Carousel.Item >
                    <a href='https://workitout.netlify.app' target="_blank" rel="noreferrer">
                        <img
                        className="d-block w-100"
                        src={ WorkItOut }
                        alt="First slide"
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

                {/* <Carousel.Item>
                    <div>
                        <video style ={{width:"80%",height:"788px"}}>
                            <source src={ HLM } type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Carousel.Item> */}

            </Carousel>
        </main>
    )
}