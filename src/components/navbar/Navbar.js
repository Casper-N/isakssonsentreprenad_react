import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { media } from "../../utils";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const sections = ["home", "services", "machinefleet", "contact"];

  const handleScroll = () => {
    const scrollPos = window.scrollY + 275;

    let currSection = activeLink;
    sections.forEach((sec, idx) => {
      const elem = document.getElementById(sec);
      if (elem && elem.offsetTop <= scrollPos) currSection = idx;
    });

    setActiveLink(currSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={media("/logo_navbar.png")} alt="" width="100" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0 fs-4">
            <Nav.Link href="#home" active={activeLink === 0}>
              Hem
            </Nav.Link>
            <Nav.Link href="#services" active={activeLink === 1}>
              Tjänster
            </Nav.Link>
            <Nav.Link href="#machinefleet" active={activeLink === 2}>
              Projekt
            </Nav.Link>
            <Nav.Link href="#contact" active={activeLink === 3}>
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
