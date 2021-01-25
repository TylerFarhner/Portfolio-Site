import About from '../components/About/About'
import CarouselComponent from '../components/Carousel/Carousel'


export default function DashboardPage(props) {
    return (
        <div className="DashboardPage">
            <main className="Page">
                <About />
                <CarouselComponent />
            </main>
        </div>
    )
}