import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AnimatePresence } from "framer-motion";
import Transition from "../components/transition"; // Import the Transition component
import logo from "../assets/Avatar1.png";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon3.svg";
import "../styles/Navbar.css"; // Import the CSS file for Navbar styles

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); // State for Transition

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setIsTransitioning(true); // Show Transition
    setTimeout(() => {
      setActiveLink(value); 
      setIsTransitioning(false); 
    }, 800); 
  };

  const handleEmailButtonClick = () => {
    window.location.href = "mailto:anujanm90@gmail.com?Subject=Contact";
  };

  return (
    <>
      {/* Transition Overlay */}
      <AnimatePresence>{isTransitioning && <Transition />}</AnimatePresence>

      {/* Navbar */}
      <Navbar expand="md" className={scrolled ? "scrolled navbar" : "navbar"}> 
        <Container>
          <Navbar.Brand href="/" className="navbar-brand-left"> 
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-nav">
              <Nav.Link
                href="#home"
                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#Aboutme"
                className={activeLink === "Aboutme" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("Aboutme")}
              >
                About me
              </Nav.Link>
              <Nav.Link
                href="#experiences"
                className={activeLink === "experiences" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("experiences")}
              >
                Experiences
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/anujan-mohanakumar/?originalSubdomain=ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a
                  href="https://www.instagram.com/_a.new.generation_/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon2} alt="Instagram" />
                </a>
              </div>
              <button className="vvd" onClick={handleEmailButtonClick}>
                <span>anujanm90@gmail.com</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
