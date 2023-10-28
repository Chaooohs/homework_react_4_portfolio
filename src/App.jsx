import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "./components/Layout";
import Homepage from "./pages/Homepage"
import Htmlpage from "./pages/Htmlpage";
import Js from "./pages/Js";
import Reactpage from "./pages/Reactpage";

function App() {

  const [works, setWorks] = useState([])

  async function request(url) {
    const promise = await fetch(url)
    return await promise.json()
  }

  useEffect(() => {
    request('https://raw.githubusercontent.com/Chaooohs/work-images/master/data.json')
      .then((json) => setWorks(json))
      .catch((e) => console.error('error'))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="Html" element={<Htmlpage data={works} />} />
            <Route path="Js" element={<Js />} />
            <Route path="React" element={<Reactpage data={works} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App