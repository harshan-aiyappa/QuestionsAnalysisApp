// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Questions from './components/Questions';
import Analysis from './components/Analysis';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<h2>Welcome to the Home Page</h2>} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/questions/:id" element={<Questions />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
