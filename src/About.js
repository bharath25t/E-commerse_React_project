// src/components/About.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>About Netflix</Card.Title>
                            <Card.Text>
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more – on thousands of internet-connected devices.
                            </Card.Text>
                            <Card.Text>
                                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
