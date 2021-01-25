// import CarouselComponent from '../components/Carousel/Carousel'

export default function DashboardPage(props) {
    return (
        <div className="DashboardPage">
            <main className="Page">
                <h1 className="tylerFarhner">Tyler Farhner</h1>
                <div className="externalLinks">
                <a className="BoxLink" href="https://www.linkedin.com/in/tyfarhner/" target="_blank">LinkedIn</a>
                <a className="BoxLink" href="https://github.com/TylerFarhner" target="_blank">GitHub</a>
                <a className="BoxLink" href="https://drive.google.com/file/d/1VDQpnqBbBAn1g4AGxule_hhweE9UuOXg/view?usp=sharing" target="_blank">Resume</a>
                </div>
                {/* <CarouselComponent /> */}
            </main>
        </div>
    )
}