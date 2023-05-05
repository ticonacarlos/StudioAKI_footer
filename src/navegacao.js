import React, { Component } from 'react';
import Logosa from './componentes/imgs/Logo.png'
// import Banner from './componentes/imgs/studio.jpg'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './footer';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Alert from 'react-bootstrap/Alert';
// import AlertaVermelho from './navegacao';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


 
export function Navegacao() {
    return (
      <>
      
      
      <Navbar  variant="white" expand="lg" className="navbar" style={{backgroundColor: "#546CCF", padding: "8px 10px"}}>
      <Container>
        <Navbar.Brand href="#home">
        <img
              src={Logosa}
              width="100"
              height="100"
              className="d-inline-block align-text-top me-2"
              alt="StudioAKI logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home" style={{ color: "#ffffff" }} >Home</Nav.Link>
            <Nav.Link href="#link" style={{ color: "#ffffff" }}>Estúdios</Nav.Link>
            <Nav.Link href="#link" style={{ color: "#ffffff" }}>Contato</Nav.Link>
            <Nav.Link href="#link" style={{ color: "#ffffff" }}>Cadastre seu Estudio</Nav.Link>
            <Nav.Link href="#link" style={{ color: "#ffffff" }}>Encontre Estudios</Nav.Link>
            </Nav>

            <NavDropdown className="ms-auto" title="Conta" id="basic-nav-dropdown" style={{ color: "#ffffff" }} >
              <NavDropdown.Item href="#action/3.1" >Minha conta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3" >
              {/* <AlertaVermelho>Sair</AlertaVermelho> */}
              </NavDropdown.Item>
            </NavDropdown>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Footer />
    </>
     



        

        
      

      


      
      
    )
    
  }




