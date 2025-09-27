import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Services from "./components/Sections/Services.jsx";
import Header from "./components/Sections/Header.jsx";
import Projects from "./components/Sections/Projects.jsx";
import Contact from "./components/Sections/Contact.jsx";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import Footer from "./components/Sections/Footer.jsx";
import UserList from "./components/Sections/DataList.jsx";
import ScrollToTop from "./components/ScrollTop.jsx";
import NotFound from "./components/Sections/NotFound.jsx"; // Create this component for 404 handling

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Header />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/UserList" element={<UserList />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
