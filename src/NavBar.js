import React from "react"
import { Link } from "react-router-dom"

function NavBar(){

    return(
        <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/newpost">New Post</Link></li>
                    <li><Link to="/topic">Pick Topic</Link></li>
                </ul>
            </nav>
    )
}


export default NavBar