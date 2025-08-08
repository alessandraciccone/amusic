import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

class FetchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=caparezza"
    )
      .then((res) => res.json())
      .then((data) => {
        const isMobile = window.innerWidth < 768;
        const limit = isMobile ? 6 : 10;
        this.setState({ songs: data.data.slice(0, limit) });
      })
      .catch((err) => console.error("Errore nella fetch:", err));
  }

  render() {
    const { songs } = this.state;

    return (
      <Container className="mt-4">
        <Row>
          <Col sm={12}>
            <h2 className="text-light">
              Caparezza <i className="bi bi-caret-right-fill"></i>
            </h2>
            <hr className="border-light" />
          </Col>
        </Row>

        <Row className="align-items-stretch">
          {songs.map((song, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4">
              <Card
                className="bg-transparent text-light h-100"
                style={{ minHeight: "250px" }}
              >
                <Card.Img
                  src={song.album.cover_medium}
                  alt={song.title}
                  className="square-card-img"
                />
                <Card.Body className="d-flex flex-column justify-content-end">
                  <Card.Title>{song.title}</Card.Title>
                  <Card.Text>{song.artist.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default FetchCard;
