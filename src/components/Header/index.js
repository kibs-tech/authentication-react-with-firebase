import React from 'react';

import { Collapse, Navbar, Button, Nav } from 'bootstrap-4-react';

const Header = () => (
    <React.Fragment>    
      <h1 style={{backgroundColor:'black', color:'white', textAlign:'center', marginBottom:'0px'}}>Helen M Jones</h1>  
     <Navbar expand="lg" dark bg="dark" mb="3">
          <Navbar.Brand href="#"><img src="/images/profile.png" /><br /></Navbar.Brand>
          <Navbar.Toggler target="#navbarColor1" />
          <Collapse navbar id="navbarColor1">            
            <Navbar.Nav mr="auto">
              <Nav.ItemLink href="#" active>Auth with React &amp; Firebased</Nav.ItemLink>
              <Nav.ItemLink href="#" active>Auth with React, Redux &amp; Firebase</Nav.ItemLink>
              <Nav.ItemLink href="#" active>React Product Page &amp; Shopping Cart</Nav.ItemLink>
              <Nav.ItemLink href="#" active>React Tic Tac Toe</Nav.ItemLink>
            </Navbar.Nav>           
          </Collapse>
        </Navbar>
  </React.Fragment>
);

export default Header;
