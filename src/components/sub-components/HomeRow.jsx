import {Row, Col} from "react-bootstrap"

function imgCol(props) {
    return (<Col><img src={props.img} alt={props.title} style={{width:"100%", overflow:"hidden", objectFit:"cover"}}></img></Col>);
}

function descCol(props) {
    return (
    <Col className="d-flex flex-column justify-content-center align-items-center">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <a href={props.to}>Learn More</a>
        <a className="btn btn-secondary mt-3" href="/bookNow">Book Now</a>
    </Col>
    );
}

export default function HomeRow(props) {
    return (
        <Row>
            {props.imgPos === "left" ? imgCol(props) : descCol(props)}
            {props.imgPos === "left" ? descCol(props) : imgCol(props)}
        </Row>
    )
  }