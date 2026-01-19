import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { UnderstandingAi } from './pages/UnderstandingAi';
import { Roles } from './pages/Roles';
import { Uses } from './pages/Uses';
import { Tools } from './pages/Tools';
import { About } from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/understanding-ai" element={<UnderstandingAi />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/uses" element={<Uses />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;