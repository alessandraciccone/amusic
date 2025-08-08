import { Card, Container, Col, Row } from "react-bootstrap";
import Prologo from "../assets/img/2a.png";
import Wanderer from "../assets/img/2b.png";
import Buble from "../assets/img/2c.png";
import Moccio from "../assets/img/2d.png";
import Julia from "../assets/img/2e.png";
import "./OtherCard.css";

function OtherCard() {
  return (
    <div>
      <Container>
        <Row>
          <h2 className="text-light mt-3 mb-3">
            {" "}
            Nuovi Episodi Radio <i className="bi bi-caret-right-fill"></i>
          </h2>
        </Row>
        <Row className="align-items-stretch">
          <Col className="d-flex">
            <Card className="bg-transparent mb-4 flex-fill d-flex flex-column h-100">
              <Card.Img
                src={Prologo}
                alt="musica"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="bg-transparent flex-grow-1 d-flex flex-column justify-content-between">
                <Card.Title className="text-light">
                  Prologo con Abuelo <i className="bi bi-explicit-fill"></i>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex">
            <Card className="bg-transparent mb-4 flex-fill d-flex flex-column h-100">
              <Card.Img
                src={Wanderer}
                alt="musica"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="bg-transparent flex-grow-1 d-flex flex-column justify-content-between">
                <Card.Title className="text-light">The Wanderer</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex">
            <Card className="bg-transparent mb-4 flex-fill d-flex flex-column h-100">
              <Card.Img
                src={Buble}
                alt="musica"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="bg-transparent flex-grow-1 d-flex flex-column justify-content-between">
                <Card.Title className="text-light">
                  Michael Bublè e Carly Pearce
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex d-none d-lg-block ">
            <Card className="bg-transparent mb-4 flex-fill d-flex flex-column h-100">
              <Card.Img
                src={Moccio}
                alt="musica"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="bg-transparent flex-grow-1 d-flex flex-column justify-content-between">
                <Card.Title className="text-light">
                  Stephan Moccio: The Zane Lowe Interview
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex d-none d-lg-block">
            <Card className="bg-transparent mb-4 flex-fill d-flex flex-column h-100">
              <Card.Img
                src={Julia}
                alt="musica"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="bg-transparent flex-grow-1 d-flex flex-column justify-content-between">
                <Card.Title className="text-light">
                  Chart Spotlight: Julia Michaels
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OtherCard;
