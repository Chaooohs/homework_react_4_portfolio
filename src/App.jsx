import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage"
import HtmlPage from "./pages/HtmlPage";
import JsPage from "./pages/JsPage";
import ReactPage from "./pages/ReactPage";

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
            <Route index element={<HomePage />} />
            <Route path="Html" element={<HtmlPage data={works} />} />
            <Route path="Js" element={<JsPage data={works} />} />
            <Route path="React" element={<ReactPage data={works} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App