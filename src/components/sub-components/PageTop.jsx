import {Carousel} from "react-bootstrap"

import MainNavbar from "./MainNavbar.jsx"

export default function PageTop(props) {
    const pageTopHeight = props.large ? "80vh" : "70vh";

    const makeStillImage = () => {
        return (
            <>
                <div className="container d-flex flex-column justify-content-center align-items-start" style={{height:pageTopHeight}}>
                    <h1 className="text-light">{props.h1}<span className="style-line-short"></span></h1>
                    <h2 className="text-light">{props.h2}</h2>
                    {props.button ? <a className="btn btn-secondary mt-5 text-light" href={props.buttonTo}>{props.button}</a> : ""}
                </div>
                <img className="position-absolute top-0 start-0" src={props.img} alt={props.alt} style={{width:"100%", height:pageTopHeight, filter: "brightness(25%)", overflow:"hidden", objectFit:"cover", zIndex:"-1"}}/>
            </>
        );
    }

    const makeCarousel = () => {
        return (
        <>
        <Carousel className="position-absolute top-0 start-0" style={{width:"100%"}}>
        {props.arr.map((elem, index) => {
            return (
            <Carousel.Item key={index} style={{height:pageTopHeight}}>
                <div className="container d-flex flex-column justify-content-center align-items-start" style={{height:"100%"}}>
                    <h1 className="text-light">{elem.h1}<span className="style-line-short"></span></h1>
                    <h2 className="text-light">{elem.h2}</h2>
                    {elem.button ? <a className="btn btn-secondary mt-5 text-light" href={elem.buttonTo}>{elem.button}</a> : ""}
                </div>
                <img className="position-absolute top-0 start-0" src={elem.img} alt={elem.alt} style={{width:"100%", height:"100%", filter: "brightness(25%)", overflow:"hidden", objectFit:"cover", zIndex:"-1"}}/>
            </Carousel.Item>
            )
        })}
        </Carousel>
        </>
        );
    }

    return (
        <>
        <MainNavbar active={props.active}/>
        <div id="main-img" className="container" style={{width:"100%", height:pageTopHeight}}>
            {props.arr ? makeCarousel() : makeStillImage()}
        </div>
        <script src={require("../../js/scrollWatcher.js")}></script>
        </>
    )
}