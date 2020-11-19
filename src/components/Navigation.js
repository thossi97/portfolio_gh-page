import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap'
import { Link } from 'react-scroll';
import pdfFile from '../cv/cv.pdf';
import '../css/header.css'

class Header extends React.Component {
    
    render(){
        return(

          <div>
          
                  <Router>
                      <Navbar bg="dark" variant="dark" fixed="top"  >
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="justify-content-center" style={{ flex: 1}}>
                              <Link className="links" href="/" activeClass="active" to="about" spy={true} smooth={true} duration={800} offset={-100}>Þorsteinn Óskarsson</Link>
                              <Link className="links" href="/" activeClass="active" to="projects" spy={true} smooth={true} duration={800} offset={-100}>Verkefni</Link>
                              <a className="links" href={pdfFile} rel="noreferrer" target = "_blank">Ferilskrá</a>
                              </Nav>   
                          </Navbar.Collapse>
                      </Navbar>
                      <br/>
                      
                  </Router>
           
      </div>
 

/*
          /////////////////////////  
           ///   GET NOTAÐ  /////
          /////////////////////////
         
            <div className="bg-container">
            <div className="container">
              <div className="text-center py-4">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png"  className="ui-w-100 rounded-circle"/>
                <div className="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto">
                  <h4 className="font-weight-bold my-4 text-white">John Doe</h4>
                  <div className="text-muted">
                    <p>Tölvunarfræðingur</p>
                    <p>sími</p>
                    <p>netfang</p>
                  </div>
                </div>
          
               
              </div>
            </div>
            <hr className="m-0"/>
            <ul className="nav nav-tabs bg-tabs-content tabs-alt justify-content-center">
              <li className="nav-item">
                <a className="nav-link py-4" href="/#" onClick={this.props.showProjects.bind()}>Projects</a>
              </li>
              <li classNameName="nav-item">
                <a className="nav-link py-4" href="#" onClick={this.props.showCv.bind()}>Ferilskrá</a>
              </li>
            </ul>
          
          </div>
            
 */
        );
    }
}

export default Header