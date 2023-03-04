import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

//import Header from "./Header.js";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
};

export default App;
