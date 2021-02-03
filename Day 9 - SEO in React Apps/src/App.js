import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Cats from "./Cat";
import {Helmet} from "react-helmet";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <title>Cats</title>
        </Helmet>
        <h1>Cat Quotes</h1>
        <Link to="/cats">See the quotes</Link>
        <Route path="/cats" component={Cats} />
      </div>
    </BrowserRouter>
  );
}

export default App;
