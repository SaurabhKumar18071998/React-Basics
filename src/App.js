import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import MainComponent from './props/MainComponent.jsx';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/parent-props" element={<MainComponent/>}/>
        </Route>
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;