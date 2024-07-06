const /*DONE = 0,*/ ACTIVE = 1/*, NEXT = 2, LOCKED = 3*/;

export default function LinearProgression(props) {
    const styles=[
        {height:"80px", width:"80px", backgroundColor:"green", borderRadius:"50%", fontWeight:"bold", fontSize:"20px"}, // Done
        {height:"80px", width:"80px", backgroundColor:"red", borderRadius:"50%", fontWeight:"bold", fontSize:"20px"}, // Active
        {height:"80px", width:"80px", backgroundColor:"#999", borderRadius:"50%", fontWeight:"bold", fontSize:"20px"}, // Next
        {height:"80px", width:"80px", backgroundColor:"#000", borderRadius:"50%", fontWeight:"bold", fontSize:"20px", color:"black"}]; // Locked

    return (
    <div className="d-flex align-items-center justify-content-center my-4">
        {props.nodes.map((elem, index) => {
            return (
                <div className="d-flex align-items-center justify-content-center" key={index}>
                    {index > 0 ? <div className="mx-3" style={{height:"15px", width:"100px", backgroundColor:"#555"}}></div> : ""}
                    <button onClick={() => {props.setNode(index, ACTIVE)}} className="d-flex align-items-center justify-content-center border" style={{height:"100px", width:"100px", backgroundColor:"#fff", borderRadius:"50%"}}>
                        <div className="d-flex align-items-center justify-content-center" style={styles[elem[0]]}>{index}</div>
                    </button>
                </div>
            )
        })}
    </div>
    )
  }