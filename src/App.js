import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';

const App = () => {
  const brandName = "NewsWave";
  const apiKey = process.env.REACT_APP_NEWS_API;  // access apiKey from .env.local file
  const pageSize = 15;

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <NavBar brandName={brandName}/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress} 
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} brandName={brandName} apiKey={apiKey} country="in" pageSize={pageSize}/>}></Route>
          <Route exact path="/business" element={<News brandName={brandName} apiKey={apiKey} country="in" category="business" setProgress={setProgress} key="business" pageSize={pageSize}/>}></Route>
          <Route exact path="/entertainment" element={<News brandName={brandName} apiKey={apiKey} country="in" category="entertainment" setProgress={setProgress} key="entertainment" pageSize={pageSize}/>}></Route>
          <Route exact path="/general" element={<News brandName={brandName} apiKey={apiKey} country="in" category="general" setProgress={setProgress} key="general" pageSize={pageSize}/>}></Route>
          <Route exact path="/health" element={<News brandName={brandName} apiKey={apiKey} country="in" category="health" setProgress={setProgress} key="health" pageSize={pageSize}/>}></Route>
          <Route exact path="/science" element={<News brandName={brandName} apiKey={apiKey} country="in" category="science" setProgress={setProgress} key="science" pageSize={pageSize}/>}></Route>
          <Route exact path="/sports" element={<News brandName={brandName} apiKey={apiKey} country="in" category="sports" setProgress={setProgress} key="sports" pageSize={pageSize}/>}></Route>
          <Route exact path="/technology" element={<News brandName={brandName} apiKey={apiKey} country="in" category="technology" setProgress={setProgress} key="technology" pageSize={pageSize}/>}></Route>
        </Routes>
        <Footer brandName={brandName}/>
      </Router>
    </>
  )
}

export default App;