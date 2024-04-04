import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopOptions } from './layouts/HomePage/ExploreTopOptions';
import { Carousel } from './layouts/HomePage/Carousel';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopOptions />
      <Carousel />
    </div>
  );
}

export default App;
