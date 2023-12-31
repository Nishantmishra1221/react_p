//rfc
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
  
 
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Link</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
            
            
      
        </ul>
        
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input type="checkbox" onClick={props.toggleMode} id='flexSwitchCheckDefault' className="form-check-input" />
                <label  htmlFor='flexSwitchCheckDefault' className="form-check-label">Default switch checkbox input</label>
              </div>
              
            </div>
    </div>
  </nav>

  );
}

Navbar.propTypes = {
    title : PropTypes.string , aboutText: PropTypes.string
}


Navbar.defaultProps = {
 
      title:'Set Title here ' ,
      aboutText : 'About text here'

} 

// if we pass nothing then default value will work , if  don't say nothing  