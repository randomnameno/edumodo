import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../photos/Logo.png'
import './Navi.css'
class Navi extends React.Component {
  
 
  render() {
    return(
        <div className="wrapper">
            <div className="nav">
                <div className="logo-container">
                    <img src={logo} alt="unavailable" style={{width:"11vh", height:"11vh"}} className="logo-nav"/>
                </div>
                    <div className="nav-text">
                        <a href="#" className="link">Study</a>
                        <a href="#" className="link">About Us</a>
                        <a href="#" className="link">Admission</a>
                        <a href="#" className="link">Pages</a>
                        <a href="#" className="link">News</a>
                        <a href="#" className="link">contact</a>
                        <button type="button" className="btn btn-default">Apply Now</button>
                    </div>
                  </div>
          </div>
        )
  }
}

export default Navi;