import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Booking } from "./layouts/HomePage/components/Booking";
import { Redirect, Route, Switch } from "react-router-dom";
import { Gallery } from "./layouts/HomePage/components/Gallery";
import Agendamento from "./layouts/HomePage/components/Agendamento";

export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/agendamento">
            <Agendamento />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
