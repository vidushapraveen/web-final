import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/images/logo-1.png'

import '../styles/Navigator.css'

function Navigator() {
  return (
    <div className="navigation_section">
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">
            <div className="d-flex align-items-center">
              <img src={logo} alt="" /><h4>Life Waws</h4>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigator