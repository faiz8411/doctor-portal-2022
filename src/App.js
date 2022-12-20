import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Appointment from "./components/Appointment/Appointment";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Reviews from "./components/Reiview/Reviews";
import Footer from "./components/Reiview/Shared/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
