import './App.css';
import LandingPage from './pages/landingPage/landingPage';
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <LandingPage /> */}
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
