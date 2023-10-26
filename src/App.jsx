import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Homepage from "./pages/Homepage"
import Htmlpage from "./pages/Htmlpage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="Html" element={<Htmlpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App