import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import DetailView from './pages/DetailView';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<DetailView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
