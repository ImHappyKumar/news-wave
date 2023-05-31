import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';

export default class App extends Component {
  brandName = "NewsWave";
  apiKey = process.env.REACT_APP_NEWS_API;  // access apiKey from .env.local file
  pageSize = 15;

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <>
        <Router>
          <NavBar brandName={this.brandName}/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress} 
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} brandName={this.brandName} apiKey={this.apiKey} country="in" pageSize={this.pageSize}/>}></Route>
            <Route exact path="/business" element={<News brandName={this.brandName} apiKey={this.apiKey} country="in" category="business" setProgress={this.setProgress} key="business" pageSize={this.pageSize}/>}></Route>
            <Route exact path="/entertainment" element={<News brandName={this.brandName} apiKey={this.apiKey} country="in" category="entertainment" setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize}/>}></Route>
            <Route exact path="/general" element={<News brandName={this.brandName} apiKey={this.apiKey} country="in" category="general" setProgress={this.setProgress} key="general" pageSize={this.pageSize}/>}></Route>
            <Route exact path="/health" element={<News brandName={this.brandName} apiKey={this.apiKey} country="in" category="health" setProgress={this.setProgress} key="health" pageSize={this.pageSize}/>}></Route>
            <Route exact path="/science" element={<News brandName={this.brandName} apiKey={this.apiKey} country="in" category="science" setProgress={this.setProgress} key="science" pageSize={this.pageSize}/>}></Route>
            <Route exact path="/sports" element={<News brandName={this.brandName} apiKey={this.apiKey} country="in" category="sports" setProgress={this.setProgress} key="sports" pageSize={this.pageSize}/>}></Route>
            <Route exact path="/technology" element={<News brandName={this.brandName} apiKey={this.apiKey} country="in" category="technology" setProgress={this.setProgress} key="technology" pageSize={this.pageSize}/>}></Route>
          </Routes>
          <Footer brandName={this.brandName}/>
        </Router>
      </>
    )
  }
}
