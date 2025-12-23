import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import DiscoveryHome from './pages/DiscoveryHome';
import Archive from './pages/Archive';
import MapCommunity from './pages/MapCommunity';
import InteractiveLab from './pages/InteractiveLab';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<DiscoveryHome />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/map" element={<MapCommunity />} />
          <Route path="/lab" element={<InteractiveLab />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
