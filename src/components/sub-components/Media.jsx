export default function Media(props) {
    const show = props.display;

    return (
        <div className="mx-5 justify-content-center align-items-center bg-tertiary" style={show ? {width:"20rem", display:"flex"} : {width:"15rem", display:"none"}}>
            <div className="d-flex flex-column my-3" style={{height:"100%", width:"100%"}}>
                <h2 className="text-center mx-5 h4 my-3">{props.title}</h2>
                <div style={{height:"8rem"}}>
                    <img src={props.image} style={props.isVideo ? {height:"100%", width:"100%", objectFit:"cover", filter: "brightness(25%)"} : {height:"100%", width:"100%", objectFit:"cover"}}></img>
                </div>
                <div className="d-flex flex-column mx-5 my-2">
                    {props.isVideo ? <h3>Description</h3> : <h3>Overview</h3>}
                    <p>{props.description}</p>
                    <h3>Publisher</h3>
                    <p>{props.publisher}</p>
                    <a className="btn btn-secondary mt-auto px-5">{props.isVideo ? "Watch" : "Read Now"}</a>
                </div>
            </div>
        </div>
    )
}