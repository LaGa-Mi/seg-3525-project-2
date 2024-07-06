import { useState } from "react"

import { Container, Form, Button, Row, Col } from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"
import ContactConfirm from "./sub-components/ContactConfirm.jsx"

export default function ContactUs(props) {
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <>
        <PageTop
            h1="KeywordsKeywordsKeywords"
            h2="SloganSloganSlogan"
            img={require("../resources/placeholder.png")}
            alt=""
            source=""
            active="contactUs"
        />
        <Container className="mt-5">
            <h1 className="my-4">Contact Us</h1>
            <Form>
                <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formSubject" className="mt-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter the subject" />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                </Form.Group>

                <Button variant="secondary" onClick={() => {setShowConfirm(true)}} className="mt-3">Submit</Button>
            </Form>
            <Row className="mt-5">
                <Col md={6}>
                <h5>Our Address</h5>
                <p>1234 Street Name<br />City, State, ZIP Code</p>
                </Col>
                <Col md={6}>
                <h5>Contact Information</h5>
                <p>Email: contact@example.com<br />Phone: (123) 456-7890</p>
                </Col>
            </Row>
        </Container>
        <PageBottom/>
        {showConfirm ?
        <ContactConfirm stateChange={setShowConfirm}/> :
        <></>}
        </>
    )
  }