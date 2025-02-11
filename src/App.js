import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Services from "./components/Sections/Services.jsx";
import Header from "./components/Sections/Header.jsx";

import RedirectWithLoading from "./components/Sections/RedirectWithLoading.jsx";
import Projects from "./components/Sections/Projects.jsx";
import Contact from "./components/Sections/Contact.jsx";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import Footer from "./components/Sections/Footer.jsx";
import UserList from "./components/Sections/DataList.jsx";

export default function App() {
  return (
    <Router>
      <TopNavbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Header} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/UserList" component={UserList} />
      </Switch>
      <Footer />
    </Router>
  );
}
