// import CarouselComponent from '../components/Carousel/Carousel'

export default function DashboardPage(props) {
    return (
        <div className="DashboardPage">
            <main className="Page">
                <h1 className="tylerFarhner">Tyler Farhner</h1>
                <div className="externalLinks">
                <a className="BoxLink" href="https://www.linkedin.com/in/tyfarhner/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="BoxLink" href="https://github.com/TylerFarhner" target="_blank" rel="noreferrer">GitHub</a>
                <a className="BoxLink" href="https://drive.google.com/file/d/1aXexts5zJGlemSB30xBQAciLaOBGgya4/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                </div>
                {/* <CarouselComponent /> */}
            </main>
        </div>
    )
}
