export default function Media(props) {
    const show = props.display;

    return (
        <div className="mx-5 justify-content-center align-items-center bg-tertiary" style={show ? {width:"20rem", display:"flex"} : {width:"15rem", display:"none"}}>
            <div className="d-flex flex-column" style={{height:"100%", width:"100%"}}>
                <h2 className="text-center mx-5 h4 my-3">{props.title}</h2>
                <div style={{height:"8rem", position:"relative"}}>
                    <img src={props.image} alt={props.title + " preview"} style={props.isVideo ? {height:"100%", width:"100%", objectFit:"cover", filter: "brightness(25%)"} : {height:"100%", width:"100%", objectFit:"cover", zIndex:"-1"}}></img>
                    {props.isVideo ? <img src={require("../../resources/vid.png")} alt="" style={{position:"absolute", top:"0", left:"50%", height:"50%", objectFit:"contain", transform:"translate(-50%, 50%)"}}></img> : ""}
                </div>
                <div className="d-flex flex-column mx-5 mt-2">
                    {props.isVideo ? <h3>Description</h3> : <h3>Overview</h3>}
                    <p>{props.description}</p>
                    <h3>Publisher</h3>
                    <p>{props.publisher}</p>
                </div>
                <a href={props.to} className="btn btn-secondary mt-auto mb-3 px-5 align-self-center">{props.isVideo ? "Watch" : "Read Now"}</a>
            </div>
        </div>
    )
}