import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


import './Gallery.css';


const Gallery = () => {
    return (
        <section className="gallery-wrapper text-white">
            <Container>
                <Row>
                    <Col sm={12} className="text-center">
                        <div className="section-title">
                            <h1>Lô Tô Ra Nhiều Trong Tháng</h1>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default Gallery;