import './Footer.css';


export default function Footer(props) {
    return (
        <footer>
            <p>Copyright &copy; King Industries {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
    );
}