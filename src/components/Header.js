import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/home.css"
import User from'../asset/user.png'


const Header = () => {
  return (
    <>

<Navbar bg="dark" variant="dark" id='nav'>
        <Container>
          <Navbar.Brand href="#home" id='home'>Crypto Creek</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" id='options'>Home</Nav.Link>
            <Nav.Link href="#cryptoDisplay" id='option2'>Coins</Nav.Link>
            <Nav.Link href="#about" id='option3'>About</Nav.Link>
           <img src={User} alt='user' id='user'/>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  )
}

export default Header
