import TyPointingPic from '../images/TyPointingPic.png'

export default function AboutPage(props) {
    return (
        <main className="AboutPage">
            {/* <h1>About Me</h1> */}
            <div>
                <img className="profileImage" src={ TyPointingPic } alt="whoops" />
                <h2>Ty</h2>
                <h3>Seattle</h3>
                <p>Creative Director</p>
                
            </div>
            <div>
                <p className="aboutText">
                    Seattle-native doing exactly what you'd expect; tech. Software engineering, Custom clothing, Graphic design,
                    and Camerawork are my specialties. Founder of OTB Productions, Co-Founder of Raincity Shooters. I aim to provide
                    unique and personal interactions to everyone I meet, client or friend. Reach out to me over email at: tyler@farhner.dev
                    or via social media: @Tyfriedrice. 
                </p>
            </div>
        </main>
    )
}