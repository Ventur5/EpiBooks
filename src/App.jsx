import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/homepages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import AboutUs from "./pages/aboutUs/AboutUs";
import NotFound from "./pages/notFound/NotFound";
import BookDetails from "./pages/bookDetails/BookDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/book/:asin" element={<BookDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
