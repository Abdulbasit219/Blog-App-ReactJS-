import { Link } from "react-router-dom"
import './Write.css'

function Write () {
    return (
            <div className="text-login">
                  <p>Log In To create Blog <Link to="/login" className="text-blue-500 underline underline-offset-1">Log In</Link></p>
            </div>
    )
}

export default Write