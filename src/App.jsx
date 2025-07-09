import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Skills } from "./Pages/Skills";
import { Projects } from "./Pages/Projects";
import { WritingSamples } from "./Pages/WritingSamples";
// import { DesignWork } from "./Pages/DesignWork";
import { Contact } from "./Pages/Contact";
import { NotFound } from "./Pages/NotFound";
import { ThemeToggle } from "./components/ThemeToggle";
import { StarBackground } from "./components/StarBackground";

function App() {
  return (
    <>
      <StarBackground />
      <ThemeToggle />
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/writing-samples" element={<WritingSamples />} />
         {/* <Route path="/design-work" element={<DesignWork />} /> */}
        <Route path="/contact" element={<Contact />} />   
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
