import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Welcome from './Welcome/Welcome';
import FileUpload from './Components/FileUpload';
import Congratz from './Congratz';
import HR from './HR'
import SampleResume1 from './SampleResume1';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Application" element={<FileUpload />} />
        <Route path="/Congratz" element={<Congratz />} />
        <Route path="/HRDash" element={<HR />} />
        <Route path="/SampleResume1" element={<SampleResume1 />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App;
