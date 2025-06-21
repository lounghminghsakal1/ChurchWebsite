import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import ClubsActivities from './pages/ClubsActivities';
import Services from './pages/Services';
import BranchChurches from './pages/BranchChurches';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/clubs-activities" element={<ClubsActivities />} />
            <Route path="/services" element={<Services />} />
            <Route path="/branch-churches" element={<BranchChurches />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;