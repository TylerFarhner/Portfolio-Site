import logoImage from '../images/logoImage.jpg'

export default function AboutPage(props) {
    return (
        <main className="AboutPage">
            {/* <h1>About Me</h1> */}
            <div>
                <img className="profileImage" src={ logoImage } alt="whoops" />
                <h2>Tyler Farhner</h2>
                <h3>Seattle</h3>
                <p>Sofware Engineer, Custom Clother, and Cameraman</p>
                
            </div>
            <div>
                <p className="aboutText">
                    If you're reading this then you get to see my site under construction! I am currently working on 
                    my newest rendition, please check back later today for updated pages, info, and links! If you need to reach me
                    immediately simply contact me through instagram @Tyfriedrice or by email: tyler@farhner.dev
                </p>
            </div>
        </main>
    )
}