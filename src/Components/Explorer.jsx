import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function Explorer() {
  const items = [
    "Esplora",
    "Decenni",
    "Attività",
    "Stati d'animo",
    "WorldWide",
    "Classifiche",
    "Audio Spaziale",
    "Video Musicali",
    "Nuovi Artisti",
  ];

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <Container fluid className="bg-transparent text-light py-4">
      <Row>
        <Col>
          <Card bg="transparent" text="light" className="w-100 border-0">
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark text-light border-0 mb-3 fs-4">
                Altro da Esplorare
              </ListGroup.Item>

              {groupedItems.map((group, rowIndex) => (
                <Row key={rowIndex} className="mb-3">
                  {group.map((label, colIndex) => (
                    <Col key={colIndex} lg={4} className="mb-2">
                      <ListGroup.Item className="bg-dark text-danger border-0 rounded-3 px-4 py-2 fs-5 d-flex justify-content-between align-items-center">
                        {label}
                        <i className="bi bi-caret-right-fill text-danger"></i>
                      </ListGroup.Item>
                    </Col>
                  ))}
                </Row>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Explorer;
