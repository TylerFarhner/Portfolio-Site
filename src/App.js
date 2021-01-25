import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'

// COMPONENTS
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// PAGES
import DashboardPage from './pages/DashboardPage'
import CreationsPage from './pages/CreationsPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'

function App(props) {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path ='/' render={props => <DashboardPage />} />
          <Route exact path ='/Creations' render={props => <CreationsPage />} />
          <Route exact path ='/Gallery' render={props => <GalleryPage />} />
          <Route exact path ='/About' render={props => <AboutPage />} />
        </Switch>
        <Footer />
    </div>
  );
}

export default withRouter(App);
