import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      foo : 'bar',
      resumeData : {}
    }
  } 

  getResumeData() {
    $.ajax({
      url: "http://localhost:3000/resumeData.json",
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({resumeData: data});
      }.bind(this),
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  }

  componentDidMount () {
    this.getResumeData();
  }

  render() {
    console.log(this.state.resumeData);
    return (
      <div id="top" className="App">
        <Header />
        <About data={this.state.resumeData.main} />
        <Resume />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
