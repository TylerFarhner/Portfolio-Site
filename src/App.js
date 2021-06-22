import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'

// COMPONENTS
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// PAGES
import DashboardPage from './pages/DashboardPage'
// import CreationsPage from './pages/CreationsPage'
// import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import CameraPage from './pages/CameraPage'
import CodingPage from './pages/CodingPage'
import ClothingPage from './pages/ClothingPage'

function App(props) {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path ='/' render={props => <DashboardPage />} />
          {/* <Route exact path ='/Creations' render={props => <CreationsPage />} /> */}
          {/* <Route exact path ='/Gallery' render={props => <GalleryPage />} /> */}
          <Route exact path ='/About' render={props => <AboutPage />} />
          <Route exact path ='/CameraWork' render={props => <CameraPage />} />
          <Route exact path ='/Coding' render={props => <CodingPage />} />
          <Route exact path ='/Clothing' render={props => <ClothingPage />} />
        </Switch>
        <Footer />
    </div>
  );
}

export default withRouter(App);
