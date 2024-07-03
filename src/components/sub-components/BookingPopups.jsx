export default function BookingPopups(props) {
    const showPopup = () => {
        switch (props.popup) {
            case "login":
                return (
                <div className="bg-white z-3 rounded">
                    <div className="d-flex justify-content-between px-4 pt-4">
                        <h1 className="text-primary h3">Login</h1>
                        <a className="btn btn-dark mb-3 me-1 mt-1" href="/bookNow">X</a>
                    </div>
                    <div className="d-flex flex-column p-4">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="Email"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="Password"/>
                        </div>
                        <a className="btn btn-primary" href="/bookNow/confirm">Login</a>
                        <a href="/bookNow/signup">Don't have an account? Create one!</a>
                    </div>
                </div>
                );
            case "signup":
                return (
                <div className='position-absolute bg-white z-3 rounded'>
                    <div className='d-flex justify-content-between px-4 pt-4'>
                        <h1 className='text-primary h3'>Sign Up</h1>
                        <a className='btn btn-dark mb-3 me-1 mt-1' href="/bookNow">X</a>
                    </div>
                    <div className='d-flex flex-column p-4'>
                        <div className="input-group mb-3">
                            <input id="signupFirstName" type="text" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="First Name" />
                        </div>
                        <div className="input-group mb-3">
                            <input id="signupLastName" type="text" className="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="Last Name" />
                        </div>
                        <div className="input-group mb-3">
                            <input id="signupEmail" type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="Email" />
                        </div>
                        <div className="input-group mb-3">
                            <input id="signupPassword" type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="Password" />
                        </div>
                        <div className="input-group mb-3">
                            <input id="signupPasswordConfirm" type="text" className="form-control" placeholder="Password Confirm" aria-label="Password Confirm" aria-describedby="Password Confirm" />
                        </div>
                        <a className="btn btn-primary" href="/bookNow/login">Sign Up</a>
                    </div>
                </div>
                );
            case "confirm":
                return (
                <div className='position-absolute bg-white z-3 rounded'>
                    <div className='d-flex justify-content-between px-4 pt-4'>
                        <h1 className='text-primary h3 pe-5'>Confirm Booking</h1>
                        <a className='btn btn-dark mb-3 me-1 mt-1' href="/bookNow">X</a>
                    </div>
                    <div className='d-flex flex-column justify-content-between px-4 pt-4'>
                        <p><span className='h5'>Service: </span>TEMP</p>
                        <p><span className='h5'>Specialist: </span>TEMP</p>
                        <p><span className='h5'>Date: </span>TEMP</p>
                        <p><span className='h5'>Time: </span>TEMP</p>
                    </div>
                    <div className='d-flex flex-column p-4'>
                        <h1>{document.getElementById("signupFirstName")}</h1>
                        <a className="btn btn-primary" href="/bookNow">Confirm</a>
                    </div>
                </div>
                );
            default:
                return <h1>Test 3</h1>;
        }
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            {showPopup()}
        </div>
    )
}