import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import KeyFeature from "./pages/KeyFeature";
import Pricing from "./pages/Pricing";
import Testimonial from "./pages/Testimonial";
import Demo from "./pages/Demo";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/feature" component={KeyFeature} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/demo" component={Demo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
