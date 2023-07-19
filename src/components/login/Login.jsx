import "./Login.css"

function Login () {

    return (
         <div className="first">
            <div className="container card p-3 mt-2 login_container">
               <p className="font">Login Form</p>
            <form>
               <div className="form group">
                  <label htmlFor="">Email</label>
                  <input type="text" name="" required className="form-control"></input>
               </div>
               <div className="form group">
                  <label htmlFor="">Password</label>
                  <input type="password" name="" required className="form-control"></input>
               </div>
            </form>
            </div>
         </div>
        )
}

export default Login