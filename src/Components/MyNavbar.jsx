import { Navbar, Nav, Container, Form } from "react-bootstrap";
import "./MyNavbar.css";
import appleLogo from "../assets/img/musica.svg";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark my-navbar">
      <Container fluid className="flex-lg-column align-items-lg-start p-3">
        <Navbar.Toggle
          aria-controls="navbar-content"
          className="custom-toggler mb-3"
        />
        <Navbar.Brand href="#home">
          <img src={appleLogo} alt="Logo" height="30" />
        </Navbar.Brand>
        <Navbar.Collapse id="navbar-content" className="w-100">
          <Form className="mb-4 d-none d-lg-block w-100">
            <Form.Control
              type="text"
              placeholder="Cerca"
              className="text-danger"
            />
          </Form>

          <Nav className="flex-lg-column text-danger w-100">
            <Nav.Link href="#home" className="text-light">
              <i className="bi bi-house-door me-2 text-danger"></i> Home
            </Nav.Link>
            <Nav.Link href="#novita" className="text-light">
              <i className="bi bi-plus-square me-2 text-danger"></i> Novità
            </Nav.Link>
            <Nav.Link href="#radio" className="text-light">
              <i className="bi bi-broadcast me-2 text-danger"></i> Radio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav.Link href="#login" className="text-danger d-lg-none mt-3">
          Accedi
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
