import React, { Component } from 'react'
import './Start.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RiArrowDownSLine} from "react-icons/ri";

export default class Start extends Component {
  render() {
    return (
      <div>
        
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="mini1"></div>
        <Navbar.Brand href="#home"><div className="img1"></div></Navbar.Brand>
        <button className='bt1'>Barcha kurslar<RiArrowDownSLine/></button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
        </Navbar.Collapse>

<button className='bt2'>UZBEK<RiArrowDownSLine/></button>
            <button className='bt3'>Kirish</button>
      </Container>
    </Navbar>
      </div>
    )
  }
}
