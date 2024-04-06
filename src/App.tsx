import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopOptions } from './layouts/HomePage/ExploreTopOptions';
import { Carousel } from './layouts/HomePage/Carousel';
import { Heros } from './layouts/HomePage/Heros';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopOptions />
      <Carousel />
      <Heros />
    </div>
  );
}

export default App;
