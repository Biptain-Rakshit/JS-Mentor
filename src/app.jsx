import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tutor from "./pages/Tutor";
import Playground from "./pages/Playground";
import Roadmap from "./pages/Roadmap";
import Challenge from "./pages/Challenge";
import ProjectGenerator from "./pages/ProjectGenerator";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/project-generator" element={<ProjectGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;