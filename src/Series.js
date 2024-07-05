
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const seriesData = [
    {
        title: "Stranger Things",
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        title: "The Witcher",
        description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world.",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        title: "Money Heist",
        description: "An unusual group of robbers attempt to carry out the most perfect heist in Spanish history.",
        imageUrl: "https://via.placeholder.com/150"
    }
    // Add more series data as needed
];

const Series = () => {
    return (
        <Container className="my-5">
            <Row>
                {seriesData.map((series, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={series.imageUrl} />
                            <Card.Body>
                                <Card.Title>{series.title}</Card.Title>
                                <Card.Text>{series.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Series;
