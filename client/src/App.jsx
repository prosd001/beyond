import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Articales from "./Pages/Articales";
import ArticalesDetails from "./Pages/ArticalesDetails";
import Home from "./Pages/Home";
import HomeBussiness from "./Pages/HomeBussiness";
import Programs from "./Pages/Programs";
import ProgramsTeam from "./Pages/ProgramsTeam";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-businesses" element={<HomeBussiness />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs-businesses" element={<ProgramsTeam />} />
          <Route path="/articles" element={<Articales />} />
          <Route path="/articles/:slug" element={<ArticalesDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
