import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function Explorer() {
  const items = [
    "Esplora per Genere",
    "Decenni",
    "Attività e Stati d'Animo",
    "WorldWide",
    "Classifiche",
    "Audio Spaziale",
    "Video Musicali",
    "Nuovi Artisti",
  ];

  return (
    <Container fluid className="bg-transparent text-light py-4">
      <Row>
        <Col>
          <Card bg="transparent" text="light" className="w-100 border-0">
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark text-light border-0 mb-3 fs-4">
                Altro da Esplorare
              </ListGroup.Item>

              {items.map((label, index) => (
                <ListGroup.Item
                  key={index}
                  className="bg-dark text-danger  border-0 bg-dark rounded-3 mb-2 px-4 py-2 fs-5 d-flex justify-content-between align-items-center"
                >
                  {label}
                  <i className="bi bi-caret-right-fill text-danger"></i>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Explorer;
