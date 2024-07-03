import MainNavbar from "./MainNavbar.jsx"

export default function PageTop(props) {
    const pageTopHeight = props.large ? "80vh" : "70vh";
    return (
        <>
        <MainNavbar active={props.active}/>
        <div id="main-img" className="container" style={{width:"100%", height:pageTopHeight}}>
            <div className="d-flex flex-column justify-content-center align-items-start" style={{width:"100%", height:pageTopHeight}}>
                <h1 className="text-light">{props.h1}<span className="style-line-short"></span></h1>
                <h2 className="text-light">{props.h2}</h2>
                {props.button ? <a className="btn btn-secondary mt-5 text-light" href={props.buttonTo}>{props.button}</a> : ""}
            </div>
            <div className="d-flex position-absolute top-0 start-0" style={{width:"100%", height:pageTopHeight, zIndex:"-1"}}>
                <img className="" src={props.img} alt={props.alt} style={{width:"100%", filter: "brightness(25%)", overflow:"hidden", objectFit:"cover"}}/>
                <small style={{display:"none"}}>{props.source}</small>
            </div>
        </div>
        <script src={require("../../js/scrollWatcher.js")}></script>
        </>
    )
}