import { Link,useNavigate } from "react-router-dom"
import './Write.css'
import { useState, useEffect } from "react"

function Write () {
    const [login, setLogin] = useState([])
    const navigate = useNavigate()

    const getdata = () => {
        const data = localStorage.getItem('logindetails')
        if (data && data.length) {
            const user = JSON.parse(data);
            setLogin(user)
          }
        }
        
        useEffect(() => {
            getdata();
            if(login.length > 0){
            navigate('/Add-post')
            }
        }, [login, navigate])

    return (
        <>
        {
            login.length === 0 ? (
            <div className="h-[72vh] text-login mt-32">
              <p>Log In To create Blog <Link to="/login" className="text-blue-500 underline underline-offset-1">Log In</Link></p>
            </div>
          ) : null
          }
        </>  
    )
}

export default Write