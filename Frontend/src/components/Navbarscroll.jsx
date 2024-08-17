import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React,{useRef} from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbarscroll() {
  const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(query);
        if (query.trim()) {
            navigate(`/searchresults?query=${encodeURIComponent(query)}`);
        }
    };
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary my-0 py-0 mx-0 " bg="dark" data-bs-theme="dark" >
      <Container fluid className='navbar-brand'>
        <Navbar.Brand href="#" className='site-name mx-5 py-0' style={{ fontSize: '3rem' , fontWeight: 'bold'}}> UnivEvents</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0 mx-9 px-4"
            style={{ maxHeight: '400px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="#CATEGORIES" >Categories</Nav.Link> */}
            <Nav.Link href="/createevent">Create Event</Nav.Link>
            <Nav.Link href="/signup">Sign Up/Login</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Fests</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Orientation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Expo</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Conference</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Forums
              </NavDropdown.Item> */}
            </NavDropdown>
            
          </Nav>
          <Form onSubmit={handleSearch} className="d-flex my-3"  role="search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
              style={{backgroundColor:'white',color: 'black', // Set text color to black
                borderRadius: '1rem', // Rounded border (Bootstrap default radius for rounded classes)
                borderColor: 'black'}}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit" variant="light" style={{borderRadius:'1rem'}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default NavScrollExample;
export default Navbarscroll;
