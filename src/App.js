import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Service from './Components/Service/Service';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/about"><About/></Route>
        <Route exact path="/service"><Service/></Route>
        <Route exact path="/contact"><Contact/></Route>
      </Switch>
    </Router>
  );
};

export default App;