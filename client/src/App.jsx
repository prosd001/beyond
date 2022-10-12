import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Articales from "./Pages/Articales";
import ArticalesDetails from "./Pages/ArticalesDetails";
import Home from "./Pages/Home";
import Programs from "./Pages/Programs";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/articales" element={<Articales />} />
          <Route path="/articales/:slug" element={<ArticalesDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
