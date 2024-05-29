import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [scrollBackground, setScrollBackground] = useState('#000');
  const [scrollColor, setScrollColor] = useState('#fff');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBackground('#fff');
        setScrollColor('#000');
      } else {
        setScrollBackground('#000');
        setScrollColor('#fff');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#000',
          padding: '10px',
          zIndex: 1,
        }}
      >
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, textAlign: 'center' }}>
          <li style={{ display: 'inline-block', marginRight: '10px' }}>
            <a href="#about" style={{ color: '#fff', textDecoration: 'none', padding: '5px 10px' }}>
              About
            </a>
          </li>
          <li style={{ display: 'inline-block', marginRight: '10px' }}>
            <a href="#portfolio" style={{ color: '#fff', textDecoration: 'none', padding: '5px 10px' }}>
              Portfolio
            </a>
          </li>
          <li style={{ display: 'inline-block', marginRight: '10px' }}>
            <a href="#contact" style={{ color: '#fff', textDecoration: 'none', padding: '5px 10px' }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div
        id="main-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh+36px)',
          backgroundColor: scrollBackground,
          color: scrollColor,
          transition: 'background-color 0.5s ease',
        }}
      >
        <h1>Sam Noyes</h1>
      </div>
      <div
        id="content"
        style={{
          height: '100vh',
          backgroundColor: scrollBackground,
          color: scrollColor,
          padding: '20px',
          transition: 'background-color 0.5s ease',
        }}
      >
        <section id="about">
          <h2>About</h2>
          <p>About me goes here.</p>
        </section>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <p>Portfolio goes here.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Contact info goes here.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
