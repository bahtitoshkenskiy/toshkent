import React, { Component } from 'react'
import './Start.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiArrowDownSLine} from "react-icons/ri";

export default class Start extends Component {
  render() {
    return (
      <div>
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><div className="img1"></div></Navbar.Brand>
        <Navbar.Brand href="#home"><button className='bt1'>Barcha kurslar<RiArrowDownSLine/></button></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
          <Nav.Link href="#features"><button className='bt1'> UZBEK<RiArrowDownSLine/></button></Nav.Link>
            <Nav.Link href="#pricing"><button className='bt3'>Kirish</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
      </div>
    )
  }
}
