import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 top-0 z-3 ">
      <Container>
        <Navbar.Brand href="#home">
          <img
            width="50px"
            src="https://static.vecteezy.com/ti/vettori-gratis/p3/10586201-icona-linea-blu-e-arancione-dell-app-meteo-vettoriale.jpg"
            alt="icona meteo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
        </Nav>
        <Navbar.Brand>La miglior App Meteo del 2023</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
