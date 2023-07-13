import React, { Component } from 'react'
import './Start.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default class Start extends Component {
  render() {
    return (
      <div>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#"><div className="img1"></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <select name="" id="select1">
              <option value="1">Barcha kurslar</option>
            </select>
          </Nav>
          <Form className="d-flex">
<select name="" id="select2">
  <option value="1">Uzbek</option>
  <option value="1">Russion</option>
</select>
<button className='bt1'>Kirish</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </div>
    )
  }
}
