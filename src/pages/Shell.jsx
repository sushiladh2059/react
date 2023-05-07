import Home from "./Home";
import About from "./About";
import "../App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Navbar";


const Shell = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Shell;
