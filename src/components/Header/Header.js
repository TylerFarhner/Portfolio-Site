import './Header.css'
import logoImage from '../../images/logoImage.jpg'

export default function Header(){
    return (
        <header className="Header">
            <img src={logoImage} alt="logo"/>
            <h1>
                Tyler Farhner
            </h1>
            <nav>
                <ul className="NavLinks">
                    <li>Home</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}