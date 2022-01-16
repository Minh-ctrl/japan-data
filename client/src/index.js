import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Population from "./routes/Population";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/population" element={<Population/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
