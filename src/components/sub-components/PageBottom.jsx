import {Container, Row, Col} from "react-bootstrap"

export default function PageBottom(props) {
    return (
        <div className="mt-5 py-4 bg-primary bg-opacity-75">
            <Container>
                <Row>
                    <Col className="d-flex flex-column justify-content-between me-5">
                        <h1>Site Name</h1>
                        <div className="d-flex flex-row justify-content-between">
                            <img src={require("../../resources/placeholder.png")} style={{height:"20px", width:"20px"}}></img>
                            <img src={require("../../resources/placeholder.png")} style={{height:"20px", width:"20px"}}></img>
                            <img src={require("../../resources/placeholder.png")} style={{height:"20px", width:"20px"}}></img>
                            <img src={require("../../resources/placeholder.png")} style={{height:"20px", width:"20px"}}></img>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column justify-content-between ms-5">
                        <h2>Business Hours</h2>
                        <p>Mon-Thu hh:mm - hh:mm</p>
                        <p>Fri hh:mm - hh:mm</p>
                        <p>Sat-Sun hh:mm - hh:mm</p>
                    </Col>
                    <Col className="d-flex flex-column justify-content-between">
                        <h2>Topic</h2>
                        <p>Page</p>
                        <p>Page</p>
                        <p>Page</p>
                    </Col>
                    <Col className="d-flex flex-column justify-content-between">
                        <h2>Topic</h2>
                        <p>Page</p>
                        <p>Page</p>
                        <p>Page</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}