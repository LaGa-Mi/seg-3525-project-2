export default function JobPosting(props) {
    const show = props.display;

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className="mx-5 justify-content-center align-items-center bg-tertiary" style={show ? {width:"20rem", display:"flex"} : {width:"15rem", display:"none"}}>
            <div className="d-flex flex-column px-5 py-3" style={{height:"100%"}}>
                <h2 className="text-center">{props.title}</h2>
                <hr></hr>
                <h3>Responsibilities</h3>
                <ul>
                    {props.responsibilities.map((elem, index) => {
                        return(
                            <li key={index}>{elem}</li>
                        )
                    })}
                </ul>
                <h3>Salary Range</h3>
                <p>{USDollar.format(props.salary[0]) + " - " + USDollar.format(props.salary[1])}</p>
                <a className="btn btn-secondary mt-auto">Apply</a>
            </div>
        </div>
    )
}