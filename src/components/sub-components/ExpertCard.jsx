export default function ExpertCard(props) {
    return (
        <div className="d-flex bg-tertiary p-3 mt-3 bg-opacity-50" style={{height:"16rem"}}>
            <div style={{width:"30%"}}><img src={require("../../resources/placeholder.png")} style={{width:"100%", height:"100%", objectFit:"cover"}}></img></div>
            <div className="d-flex flex-column align-items-end" style={{width:"70%"}}>
                <div className="d-flex flex-column align-items-start" style={{width:"90%"}}>
                    <div className="d-flex bg-secondary ps-4 text-light" style={{width:"60%"}}><h2>{props.name}</h2></div>
                    <h3 className="">&emsp;{props.title}</h3>
                    <p className="mt-4">{props.description}</p>
                </div>
            </div>
        </div>
    )
  }