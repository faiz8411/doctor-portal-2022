import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Appointment from "./components/Appointment/Appointment";
import Contact from "./components/Contact/Contact";
import Header from "./components/Reiview/Shared/Header";
import Home from "./components/Home/Home";
import Login from "./components/Reiview/Shared/Login";
import Reviews from "./components/Reiview/Reviews";
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
    </BrowserRouter>
  );
}

export default App;
