import './App.css';

// COMPONENTS
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// PAGES
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <div className="App">
      <Header />
      <DashboardPage />
      <Footer />
    </div>
  );
}

export default App;
