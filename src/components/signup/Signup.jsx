import React, { useState } from "react"
import "./Signup.css"
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Signup() {

    const [isregister, setIsregister] = useState(
        // name: null,
        // email: null,
        // password: null,
        false
        );

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState([])

    const [data,setData] = useState([])
    const navigate = useNavigate();

    // const onchange = (e) => {
    //     const { value, name } = e.target
    //     setIsregister(() => {
    //         return {
    //             ...isregister,
    //             [name]: value
    //         }
    //     })
    // }

    const showpasshandle = () => {
     setIsregister(!isregister)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(name == ''){
            alert("Name Field is required")
        }else if(email == ''){
            alert("Email Field is required")
        }else if(!email.includes("@")){
            alert("Please enter a valid email address")
        }else if(password == ''){
            alert("Password Field is required")
        }else if(password.length < 8){
            alert("Password must be at least 8 characters long")
        }else{        

         const newdata = {
            name: name,
            email: email,
            password: password
         }   

        localStorage.setItem('registeration',JSON.stringify([...data,newdata]));
        alert("Sucessfully registered")
        navigate('/login')
        }
    }


    let  passtype, btnicon;
    if (isregister === true) {
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
                        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control"></input>
                    </div>

                    <div className="form-group">
                            <label htmlFor="password">Password</label>
                        <div>
                            <input type={passtype} value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control"></input>
                            <button className="btn" type="button" onClick={showpasshandle}>{btnicon}</button>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={onSubmit}>Register</button>
                </form>
                    <div className="text">
                     <p>Already Have an Account <Link to="/login" className="text-blue-500 underline underline-offset-1">Sign in</Link></p>
                    </div>

            </div>
        </div>
    )

}

export default Signup;