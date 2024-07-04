import {Container, Row, Col, Dropdown} from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import { useState } from "react";

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"
import BookingPopups from "./sub-components/BookingPopups.jsx"

export default function BookNow(props) {
    const [radioValue, setRadioValue] = useState(0);
    const [chosenService, setchosenService] = useState("");
    const [chosenTime, setchosenTime] = useState("");
    const [makeReccuring, setmakeReccuring] = useState(false);
    const bookingState = props.state;

    const onchangeServiceCategory = (e) => {
        if (e.target.checked) setRadioValue(e.target.value);
    };
    const onServiceSelect = (e) => {
        setchosenService(e);
    }
    const onTimeSelect = (e) => {
        setchosenTime(e);
    }
    const makeReccuringChanged = (e) => {
        setmakeReccuring(e.target.checked);
        console.log(makeReccuring);
    }

    return (
        <>
        <PageTop
            h1="KeywordsKeywordsKeywords"
            h2="SloganSloganSlogan"
            img={require("../resources/placeholder.png")}
            alt=""
            source=""
            active=""
        />
        <Container className="mt-5">
            <h1 className="display-1">Book With Us Today !</h1>
            <div className="border p-3">
                <Form>
                    <Row>
                        <Col className="d-flex flex-column align-items-center justify-content-center">
                            <div className="mb-3">
                                {[{name:"Yard Work"}, {name:"Car Washing"}, {name:"Dog Walking"}].map((radio, index) => {
                                    return(
                                        <Form.Check
                                            key={index}
                                            id={index}

                                            inline
                                            label={radio.name}
                                            value={index + 1}
                                            name="Service-category"
                                            type="radio"

                                            onChange={onchangeServiceCategory}
                                        />
                                    )
                                })
                                }
                            </div>
                            <Dropdown style={{width:"70%"}} onSelect={onServiceSelect}>
                                <Dropdown.Toggle variant="secondary" id="service" style={{width:"100%"}}>{chosenService === "" ? "Service" : chosenService}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                {[[], ["Mowing", "Hedge Trimming"], ["Basic Wash"], ["Walk"]][radioValue].map((elem, index) => {
                                    return (
                                        <Dropdown.Item key={index} eventKey={elem}>{elem}</Dropdown.Item>
                                    )
                                })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center"><Form.Control type="date"/></Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center">
                            <Dropdown className="mb-2" style={{width:"70%"}} onSelect={onTimeSelect}>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width:"100%"}}>{chosenTime === "" ? "Time" : chosenTime}</Dropdown.Toggle>

                                <Dropdown.Menu>
                                {["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"].map((elem, index) => {
                                    return (
                                        <Dropdown.Item key={index} eventKey={elem}>{elem}</Dropdown.Item>
                                    )
                                })}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Form.Check
                                type="switch"
                                label="Make Recurring?"
                                onChange={makeReccuringChanged}
                            />
                        </Col>
                    </Row>
                </Form>
                <div className="d-flex justify-content-center">
                    <a href="/bookNow/login" className="btn btn-secondary">Book Now</a>
                </div>
            </div>
        </Container>
        <PageBottom/>
        {bookingState === "booking" ? "" : 
        <div className="d-flex justify-content-center align-items-center" style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.75)", top:"0", zIndex:"3", position:"fixed"}}>
            <BookingPopups popup={props.state}/>
        </div>}
        </>
    )
  }