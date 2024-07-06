import {Container, Row, Col, Dropdown} from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import { useState } from "react";

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"
import BookingPopups from "./sub-components/BookingPopups.jsx"
import CalendarInput from "./sub-components/CalendarInput.jsx";
import LinearProgression from "./sub-components/LinearProgression.jsx"

const /*DONE = 0,*/ ACTIVE = 1, NEXT = 2, LOCKED = 3;
const NONE = 0, LOGIN = 1/*, SIGNUP = 2, CONFIRM = 3*/;

export default function BookNow(props) {
    const [radioValue, setRadioValue] = useState(0);
    const [chosenService, setchosenService] = useState("");
    const [chosenTime, setchosenTime] = useState("");
    const [makeReccuring, setmakeReccuring] = useState(false);
    const [nodes, setNodes] = useState([[ACTIVE, NEXT], [NEXT, NEXT], [LOCKED, LOCKED], [NEXT, NEXT]])
    const [bookingState, setBookingState] = useState(NONE);

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
        if (!makeReccuring) {
            unlockNode(2);
        } else {
            setNode(2, LOCKED);
        }
    }
    /*const resetNodes = () => {
        setNodes([ACTIVE, NEXT, LOCKED, NEXT]);
    }*/
    const setNode = (indSet, val) => {
        if (nodes[indSet][0] === LOCKED) return nodes;
        setNodes(nodes.map((elem, index) => {
            if (index === indSet) {
                return [val, elem[0]];
            } else if (val === ACTIVE && elem[0] === ACTIVE) {
                return [elem[1], elem[1]];
            } else {
                return elem;
            }
        }))
    }
    const nextNode = () => {
        setNodes(nodes.map((elem, index) => {
            if (elem[0] === LOCKED) return elem;
            if (elem[0] === ACTIVE) {
                return [elem[1], elem[1]];
            }
            if (index > 0) {
                if (nodes[index - 1][0] === ACTIVE) {
                    return [ACTIVE, elem[0]];
                } else if (index > 1) {
                    if (nodes[index - 2][0] === ACTIVE && nodes[index - 1][0] === LOCKED) {
                        return [ACTIVE, elem[0]];
                    }
                }
            }
            return elem;
        }))
    }
    const prevNode = () => {
        setNodes(nodes.map((elem, index) => {
            if (elem[0] === LOCKED) return elem;
            if (elem[0] === ACTIVE) {
                return [elem[1], elem[1]];
            }
            if (index < 3) {
                if (nodes[index + 1][0] === ACTIVE) {
                    return [ACTIVE, elem[0]];
                } else if (index < 2) {
                    if (nodes[index + 2][0] === ACTIVE && nodes[index + 1][0] === LOCKED) {
                        return [ACTIVE, elem[0]];
                    }
                }
            }
            return elem;
        }))
    }
    const unlockNode = (indUnlock) => {
        if (nodes[indUnlock][0] !== LOCKED) return nodes;
        setNodes(nodes.map((elem, index) => {
            if (index === indUnlock) {
                return [NEXT, NEXT];
            } else {
                return elem;
            }
        }))
    }
    const nodeToInput = () => {
        if (nodes[0][0] === ACTIVE) {
            return (
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
            );
        } else if (nodes[1][0] === ACTIVE) {
            return (
                <Row>
                    <Col className="d-flex flex-column align-items-center justify-content-center"><CalendarInput/></Col>
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
            );
        } else if (nodes[2][0] === ACTIVE) {
            return (
                <h1>This is where I would have put my page to specify recurring meetings</h1>
            );
        } else {
            return (
                <h1>This is where I would have put my page to confirm some final details</h1>
            );
        }
    }
    const bookEnd = () => {
        setBookingState(LOGIN);
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
            <LinearProgression nodes={nodes} setNode={setNode}/>
            <div className="d-flex border p-3 align-items-center flex-column">
                <Form className="mb-4">
                    {nodeToInput()}
                </Form>
                <div className="d-flex justify-content-between" style={{width:"70%"}}>
                    <button onClick={prevNode} className="btn btn-secondary">Prev</button>
                    {nodes[3][0] === ACTIVE ?
                    <button onClick={bookEnd} className="btn btn-secondary">Book</button>:
                    <button onClick={nextNode} className="btn btn-secondary">Next</button>}
                </div>
            </div>
        </Container>
        <PageBottom/>
        <BookingPopups popup={bookingState} stateChange={setBookingState}/>
        </>
    )
  }