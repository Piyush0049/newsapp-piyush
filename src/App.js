import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0
    }
  }
  setprogress = (progress) => {
    this.setState({ progress });
  };
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Router>
          <Navbar />
          <div className='container my-8'>
            <Routes>
              <Route exact path='/about' element={<About />} />
              <Route exact path='/' element={<News setprogress={this.setprogress} category="general" />} />
              <Route exact path='/business' element={<News setprogress={this.setprogress} key="business" category="business" />} />
              <Route exact path='/sports' element={<News setprogress={this.setprogress} key="sports" category="sports" />} />
              <Route exact path='/entertainment' element={<News setprogress={this.setprogress} key="entertainment" category="entertainment" />} />
              <Route exact path='/health' element={<News setprogress={this.setprogress} key="health" category="health" />} />
            </Routes>
          </div>
        </Router>

        {/* */}

      </div>
    )
  }
}
