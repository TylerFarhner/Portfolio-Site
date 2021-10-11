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
                Washington Native living and working in the Greater Seattle Area. Passionate about both 
                technology and creativity, I provide Camera and coding services to businesses and individuals
                around the Pacific North West. I strive to bring a unique approach to everything I do, 
                challenging norms and 'standard procedures' to ensure unique outcomes for my clients.
                </p>
            </div>
        </main>
    )
}