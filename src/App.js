import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
