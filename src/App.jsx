import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage"
import Htmlpage from "./pages/Htmlpage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Html" element={<Htmlpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App