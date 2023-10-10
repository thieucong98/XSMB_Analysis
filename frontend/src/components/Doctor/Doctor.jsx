import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FakeDoctors } from '../../FakeData/Doctor';
import Doctors from '../../Pages/Home/Doctors/Doctors';

const Doctor = () => {
    return (
        <section className="doctor-wrapper">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="section-title">
                            <h1 className="mb-5 mb-sm-dent">Lô Tô Lâu Chưa Ra</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        </section>
    );
};

export default Doctor;