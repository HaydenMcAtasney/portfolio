import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar/navbar";
import Footer from './components/Footer/footer';
import Home from './pages/homepage'; 
import Portfolio from './pages/Portfolio/portfolio';
import MovieDb from './pages/Moviedb/moviedb';
import Capstone from './pages/Capstone/capstone';
import ScrollToTop from './components/ScrollToTop';





function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar />
        <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/moviedb" element={<MovieDb />} />
            <Route path="/capstone" element={<Capstone />} />




          </Routes>
          <Footer />
          </div>
         


      </BrowserRouter>
    </div>
  );
}

export default App;
