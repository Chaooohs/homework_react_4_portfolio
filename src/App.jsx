import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Homepage from "./pages/Homepage"
import Htmlpage from "./pages/Htmlpage";
import Js from "./pages/Js";
import React from "./pages/React";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="Html" element={<Htmlpage />} />
            <Route path="Js" element={<Js />} />
            <Route path="React" element={<React />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App