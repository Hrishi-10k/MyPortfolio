import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // ✅ Make sure this line is here
import Footer from './components/Footer';


function App() {
  return (
    <div className="app-background">
      <Navbar />

      <div className="container">
        <div className="section-box" id="home">
          <Home />
        </div>
        <div className="section-box" id="about">
          <About />
        </div>
        <div className="section-box" id="projects">
          <Projects />
        </div>
        <div className="section-box mb-5" id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
