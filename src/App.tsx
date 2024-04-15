import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Booking } from "./layouts/HomePage/components/Booking";
import { Redirect, Route, Switch } from "react-router-dom";
import { Gallery } from "./layouts/HomePage/components/Gallery";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
