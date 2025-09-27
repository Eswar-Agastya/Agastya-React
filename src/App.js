import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from "react-router-dom";

import Services from "./components/Sections/Services.jsx";
import Header from "./components/Sections/Header.jsx";
import Projects from "./components/Sections/Projects.jsx";
import Contact from "./components/Sections/Contact.jsx";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import Footer from "./components/Sections/Footer.jsx";
import UserList from "./components/Sections/DataList.jsx";
import ScrollToTop from "./components/ScrollTop.jsx";
import NotFound from "./components/Sections/NotFound.jsx";

function AppContent() {
  const location = useLocation();

  // Define routes where Header and Footer should be displayed
  const validRoutes = ["/home", "/services", "/products", "/contact", "/UserList"];
  const showHeaderFooter = validRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {/* Render TopNavbar only for valid routes */}
      {showHeaderFooter && <TopNavbar />}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Header} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/UserList" component={UserList} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" component={NotFound} />
      </Switch>
      {/* Render Footer only for valid routes */}
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
