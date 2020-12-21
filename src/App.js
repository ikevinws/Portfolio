import React from 'react';
import './App.scss';
// components
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Hero />
        </div>
    );
};

export default App;
