import React from "react"
import "./Signup.css"
import { VscEyeClosed, VscEye } from "react-icons/vsc";


function Reg(props) {

    let  passtype, btnicon;
    if (props.showpassword === true) {
        btnicon = <VscEyeClosed />;
        passtype = "text";

    }
    else {
        passtype = "password";
        btnicon = <VscEye />;
    }


    return (
        <div className="first">
            <div className="container card p-3 mt-2 reg_container">
                <p className="font">Registeration Form</p>

                <form onSubmit={props.submit}>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" required className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" required className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="passwords">Password</label>
                        <div>
                            <input type={passtype} name="passwords" required className="form-control"></input>
                            <button className="btn" type="button" onClick={props.showpasshandle}>{btnicon}</button>
                        </div>
                    </div>

                    <button class="btn btn-primary" type="submit">Register</button>
                </form>
            </div>
        </div>
    )

}

export default Reg