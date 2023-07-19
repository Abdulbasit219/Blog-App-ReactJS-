import React, { useState } from "react"
import "./Signup.css"
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Signup() {

    const [isregister, setIsregister] = useState({
        name: null,
        email: null,
        password: null,
        showpass: false
    });

    const [data,setData] = useState([])

    const onchange = (e) => {
        const { value, name } = e.target
        setIsregister(() => {
            return {
                ...isregister,
                [name]: value
            }
        })
    }

    const showpasshandle = () => {
     setIsregister({showpass: !isregister.showpass}
    )}

    const onSubmit = (e) => {
        e.preventDefault();
       localStorage.setItem('registeration',JSON.stringify([...data,isregister]));
       alert("Sucessfully registered")
    }


    let  passtype, btnicon;
    if (isregister.showpass === true) {
        btnicon = <VscEyeClosed />;
        passtype = "text";

    }
    else {
        passtype = "password";
        btnicon = <VscEye />;
    }

    return (
        <div className="first1">
            <div className="container card p-3 mt-2 reg_container shadow">
                <p className="font">Registeration Form</p>

                <form>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={onchange} className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" onChange={onchange} className="form-control"></input>
                    </div>

                    <div className="form-group">
                            <label htmlFor="password">Password</label>
                        <div>
                            <input type={passtype} name="password" onChange={onchange} className="form-control"></input>
                            <button className="btn" type="button" onClick={showpasshandle}>{btnicon}</button>
                        </div>
                    </div>
                    <button class="btn btn-primary" onClick={onSubmit}>Register</button>
                </form>
                    <div className="text">
                     <p>Already Have an Account <Link to="/login" className="text-blue-500 underline underline-offset-1">Sign in</Link></p>
                    </div>

            </div>
        </div>
    )

}

export default Signup;