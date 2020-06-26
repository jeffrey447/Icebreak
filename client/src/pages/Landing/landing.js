// Basically the landing page should look like this: https://www.getflow.com/

import React, { Component } from 'react';

// Importing Components
// Make sure that components starts with a capitalized letter.
import Typed from '../../components/typed/typed';

// Importing CSS
import '../../assets/css/App.css';

// Importing Images
import mainLogo from '../../assets/images/logoWords.png';

class Landing extends Component {

  render() {
    return (
          <div className="home-container">
            <div className="header d-flex justify-content-between">
              <a href="/" className="logo-container">
                <img id="icebreak-logo" src={mainLogo} alt="icebreak Logo"/>
              </a>
              <div className="login-container">
								<a href="http://localhost:5000/api/auth"> Login </a>
              </div>
            </div>
            <div className="content">
              <div className="marketingPitch">
                <Typed heading={"It's time to correctly connect your "} dataText={["organizations.","movements.","clubs."]}/>
                <h3> Simplify your organization by managing all in one platform. </h3>
              </div>
						</div>
          </div>
         
    );
  }
}

export default Landing;
