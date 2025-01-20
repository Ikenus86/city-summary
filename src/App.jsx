// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Surveys from './pages/Surveys';
import Results from './pages/Results';
import Create from './pages/Create';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/profilo" element={<Profile />} />
        <Route path="/sondaggi" element={<Surveys />} />
        <Route path="/risultati" element={<Results />} />
        <Route path="/crea" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;