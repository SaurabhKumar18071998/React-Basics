import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import MainComponent from './props/MainComponent.jsx';
import UseEffectExample from './UseEffect/UseEffect.jsx';
import NoteState from './UseContext/notes/NoteState.jsx';
import ShowContextContent from './UseContext/notes/ShowContextContent.jsx';
import UseRefExample from './UseRef/UseRefExample.jsx';
import UseReducerExample from './UseReducer/UseReducerExample.jsx';
import UseCallBackExample from './UseCallBackExample/UseCallBackExample.jsx';
function App() {
  return (
    <NoteState>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/parent-props" element={<MainComponent/>}/>
          <Route path="/use-effect-example" element={<UseEffectExample/>}/>
          <Route path="/use-context-example" element={<ShowContextContent/>}/>
          <Route path="/use-ref-example" element={<UseRefExample/>}/>
          <Route path="/use-reducer-example" element={<UseReducerExample/>}/>
          <Route path="/use-callback-example" element={<UseCallBackExample/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </NoteState>
  );
}

export default App;