import "./Login.css"
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function Login() {

   const [islogin, setIslogin] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [dataa, setData] = useState([]);

   const showpasshandle = () => {
      setIslogin(!islogin)
   }

   let passtype, btnicon;
   if (islogin === true) {
      btnicon = <VscEyeClosed />;
      passtype = "text";

   }
   else {
      passtype = "password";
      btnicon = <VscEye />;
   }

   const navigate = useNavigate();

   const onSubmit = (e) => {
      e.preventDefault();
      const getdata = localStorage.getItem('registeration')
      if (!email) {
         alert('Email is required')
         return
      }else if(!password){
         alert('Password is required')
         return
      }
      else if (getdata.length) {
         const userdata = JSON.parse(getdata);
         const userlogin = userdata.filter((element, k) => {
            return element.email === email && element.password === password;
         })
         if (userlogin.length == 0) {
            alert("Invalid Email and Password")
            return
         }
         else {
            alert("Login successful")
            navigate('/Add-post')
         }
         localStorage.setItem("logindetails", JSON.stringify([...dataa, getdata]));
      }
   }

   return (
      <div className="first2">
         <div className="container card p-3 mt-2 rounded login_container shadow">
            <p className="font">Login Form</p>

            <form>

               <div className="form group">
                  <label htmlFor="email">Email</label>
                  <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control"></input>
               </div>

               <div className="form group">
                  <label htmlFor="password">Password</label>
                  <div className="form-btn">
                     <input type={passtype} value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control"></input>
                     <button className="btn" type="button" onClick={showpasshandle}>{btnicon}</button>
                  </div>
               </div>

               <button className="btn btn-primary mt-2" onClick={onSubmit}>Log In</button>

            </form>

            <div className="text">
               <p>Create Account <Link to="/sign-up" className="text-blue-500 underline underline-offset-1">Sign Up</Link></p>
            </div>

         </div>
      </div>
   )
}
export default Login