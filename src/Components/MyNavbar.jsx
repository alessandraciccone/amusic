import { Navbar, Nav, Container, Form } from "react-bootstrap";
import "./MyNavbar.css";
import appleLogo from "../assets/img/musica.svg";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid className="flex-lg-column align-items p-3">
        <Navbar.Toggle
          aria-controls="navbar-content"
          className="custom-toggler"
        />
        <Navbar.Collapse id="navbar-content" className="w-100 ">
          <Form className="mb-3 d-none d-lg-block ">
            <Form.Control
              type="text"
              placeholder="Cerca"
              className="text-danger"
            />
          </Form>

          <Nav className="flex-lg-column text-danger">
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
        <Navbar.Brand href="#home" className="mb-lg-4">
          <img src={appleLogo} alt="Logo" height="30" />
        </Navbar.Brand>

        <Nav.Link href="#login" className="text-danger">
          Accedi
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
