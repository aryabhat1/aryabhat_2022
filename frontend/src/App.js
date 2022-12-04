// eslint-disable-next-line

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About.jsx";
import Projects from "./components/project/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <div className="App">Welcome</div> */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Login />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
