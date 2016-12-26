import React, { Component } from 'react';

class About extends Component {
  render() {

    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = [];
      var position = (this.props.data.occupation).split(',');

      for (var i = 0; i < position.length; i++) {
        occupation.push(<span key={i}>{position[i]}</span>);
      }

      var about = this.props.data.about;
      var image = this.props.data.image;
      var social = [];

      for (var i = 0; i <  this.props.data.social.length; i++) {
        social.push(<li key={i}><a href={ this.props.data.social[i].url } target="_blank"><i className={ this.props.data.social[i].className }></i></a></li>);
      }

      var profile = this.props.data.profile;
      var fullname = this.props.data.fullname;
      var dob = this.props.data.dob;
      var job = this.props.data.currentJob;
      var website = this.props.data.website;
      var email = this.props.data.email;
      var skillDesc = this.props.data.skillDesc;
      var skills = [];

      for (var i = 0; i < this.props.data.resume.skills.length; i++) {
        skills.push(
          <li key={i}>
              <div className={ this.props.data.resume.skills[i].className }><span>{ this.props.data.resume.skills[i].level }%</span></div>
              <strong>{ this.props.data.resume.skills[i].name }</strong>
          </li>
        );

        var street = this.props.data.address.street;
        var city = this.props.data.address.city;
        var state = this.props.data.address.state;
        var zip = this.props.data.address.zip;

        
      }
    }

    return (
      <div>
        <section id="intro">   
          <div className="intro-overlay"></div>	
          <div className="intro-content">
            <div className="row">
              <div className="col-twelve">
                <h5>Hello</h5>
                <h1>I'm { name }.</h1>

                <p className="intro-position">
                  { occupation }
                </p>

                <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
              </div>  
            </div>   		 		
          </div>

          <ul className="intro-social">        
            { social }
          </ul>     	

        </section>
        
        <section id="about">  
            <div className="row section-intro">
              <div className="col-twelve">
                <h5>About</h5>
                <h1>Let me introduce myself.</h1>
                <div className="intro-info">
                  <img src={ image } alt="Profile Picture" />
                  <p className="lead">{ about }</p>
                </div>   			
              </div>   		
            </div> 

            <div className="row about-content">
                <div className="col-six tab-full">
                    <h3>Profile</h3>
                    <p>{ profile }</p>
                    <ul className="info-list">
                        <li>
                            <strong>Fullname:</strong>
                            <span>{ fullname }</span>
                        </li>
                        <li>
                            <strong>Birth Date:</strong>
                            <span>{ dob }</span>
                        </li>
                        <li>
                            <strong>Home Address:</strong>
                            <span>{ street }</span>
                            <span>{ city }, { zip }</span>
                            <span>{ state }</span>
                        </li>
                        <li>
                            <strong>Job:</strong>
                            <span>{ job }</span>
                        </li>
                        <li>
                            <strong>Website:</strong>
                            <span><a href={ website } target="_blank">{ name }</a></span>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            <span>{ email }</span>
                        </li>
                    </ul>
                </div>

                <div className="col-six tab-full">
                    <h3>Skills</h3>
                    <p>{ skillDesc }</p>
                    <ul className="skill-bars">
                      { skills }
                    </ul> 
                </div>
            </div>

            <div className="row button-section">
                <div className="col-twelve">
                    <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
                    <a href="#" title="Download CV" className="button button-primary">Download CV</a>
                </div>   		
            </div>
          </section>
      </div>
    );
  }
}

export default About;
