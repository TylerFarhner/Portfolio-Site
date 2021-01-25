import logoImage from '../images/logoImage.jpg'
import locationLogo from '../images/locationLogo.png'
import codeBlock from '../images/codeBlock.png'

export default function AboutPage(props) {
    return (
        <main className="AboutPage">
            <h1>About Me</h1>
            <div>
                <img className="profileImage" src={ logoImage } alt="whoops" />
                <p><img src={ locationLogo } alt="whoops" /> Seattle, Washington</p>
                <p><img src={ codeBlock } alt="whoops" /> Freelance Software Engineer</p>
                
            </div>
            <div>
                <p className="aboutText">
                    Seattle-based full-stack Software Engineer, leaving my mark one application at a time. 
                    I bring a straight-forward, user-centric approach to my design, to allow for a smooth and enjoyable experience. 
                    Specializing in the M.E.R.N. Stack I utilize up-to-date technologies, keeping things current and fresh. 
                    I aim to deliver easy and affordable solutions to everyone's web and mobile application needs.
                </p>
            </div>
        </main>
    )
}