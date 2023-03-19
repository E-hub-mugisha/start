import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {

    return (

        <>
            <header class="as-header header-layout1">
                <div class="sticky-wrapper">
                    <div class="sticky-active">
                        <div class="menu-area">
                            <div class="container as-container">
                                <div class="row align-items-center justify-content-between">
                                    {['lg'].map((expand) => (
                                        <Navbar key={expand} expand={expand}>
                                            <Container fluid>
                                                <Navbar.Brand>
                                                    <div class="header-logo">
                                                        <a href="/">
                                                            <img src="assets/img/logo-white.png" alt="Dalky" />
                                                        </a>
                                                    </div>
                                                </Navbar.Brand>
                                                <div class="col-auto">
                                                    <Nav class="main-menu d-none d-lg-inline-block">
                                                        <ul>
                                                            <li><a href="/">Home</a></li>
                                                            <li><a href="/about">About Us</a></li>
                                                            <li ><a href="/services">Services</a></li>
                                                            <li><a href="/contact">Contact Us</a></li>
                                                            <li><a href="https://instagram.com/start_advertising?igshid=YmMyMTA2M2Y=">
                                                                <i class="fab fa-instagram"></i></a></li>
                                                            <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                                            <li><a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                                            <li><a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a></li> 
                                                            
                                                        </ul>
                                                        
                                                    </Nav>
                                                </div>
                                                <Navbar.Toggle class="as-menu-toggle" aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                                <Navbar.Offcanvas
                                                    id={`offcanvasNavbar-expand-${expand}`}
                                                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                                    placement="end"
                                                >
                                                    <Offcanvas.Header closeButton>
                                                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                                            {/* <div class="mobile-logo">
                                                                        <a href="index.html">
                                                                            <img src="assets/img/logo-white.png" alt="Dalky" />
                                                                        </a>
                                                                    </div> */}
                                                        </Offcanvas.Title>
                                                    </Offcanvas.Header>
                                                    <Offcanvas.Body>
                                                        <Nav className="justify-content-end flex-grow-1 pe-3">
                                                            <Nav.Link href="/">Home</Nav.Link>
                                                            <Nav.Link href="/about">About</Nav.Link>
                                                            <Nav.Link href='/services'>Services</Nav.Link>
                                                            <Nav.Link href='/contact'>Contact us</Nav.Link>
                                                        </Nav>
                                                    </Offcanvas.Body>
                                                </Navbar.Offcanvas>
                                            </Container>
                                        </Navbar>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header