import { Card, Container, Row, Col } from "react-bootstrap";
import chill from "../assets/img/1a.png";
import latina from "../assets/img/1b.png";
import "./MyCard.css";

function MyCard() {
  return (
    <div>
      <Container>
        <Row className="mb-4 mt-3">
          <Col>
            <h2 className="text-light">NOVITÀ</h2>
            <hr className="border-light" />
          </Col>
        </Row>

        <Row>
          <Col className="d-flex">
            <Card className="bg-transparent mb-4 flex-fill d-flex flex-column h-100">
              <Card.Img
                src={chill}
                alt="musica"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="bg-transparent flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="text-light">
                    NUOVA STAZIONE RADIO
                  </Card.Title>
                  <Card.Text className="text-light">
                    Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex">
            <Card className="bg-transparent mb-4 flex-fill d-flex flex-column h-100">
              <Card.Img
                src={latina}
                alt="musica"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="bg-transparent flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="text-light">
                    NUOVA STAZIONE RADIO
                  </Card.Title>
                  <Card.Text className="text-light">
                    Ecco la nuova casa della musica latina.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyCard;
