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
        this.setState({ songs: data.data.slice(0, 6) });
      })
      .catch((err) => console.error("Errore nella fetch:", err));
  }

  render() {
    const { songs } = this.state;

    // Suddividi le canzoni in gruppi di 3 usando reduce
    const groupedSongs = songs.reduce((acc, song, index) => {
      if (index % 3 === 0) {
        acc.push(songs.slice(index, index + 3));
      }
      return acc;
    }, []);

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

        {groupedSongs.map((group, rowIndex) => (
          <Row key={rowIndex} className="align-items-stretch mb-4">
            {group.map((song, index) => (
              <Col key={index} sm={4}>
                <Card className="bg-transparent text-light h-100">
                  <Card.Img
                    src={song.album.cover_medium}
                    alt={song.title}
                    className="card-img"
                  />
                  <Card.Body className="d-flex flex-column justify-content-end">
                    <Card.Title>{song.title}</Card.Title>
                    <Card.Text>{song.artist.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    );
  }
}

export default FetchCard;
