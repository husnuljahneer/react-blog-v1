import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts/:id" element={<Posts />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
