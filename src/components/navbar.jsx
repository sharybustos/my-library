import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

const Navbar = ({ userProps }) => {
    const [user, setUser] = useState(false)

    useEffect(() => {
        console.log(userProps)
        setUser(userProps)
    })

    const logOut = () => {
        localStorage.removeItem('user_id')
        setUser(false)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">My Library</a>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        {user ? <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                                className="nav-link"
                                to="/books">Books</NavLink>
                        </li> : ''}
                        {user ? '' : <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                                className="nav-link"
                                to="/login">Login</NavLink>
                        </li>}
                        {user ? '' : <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                                className="nav-link"
                                to="/register">Register</NavLink>
                        </li>}
                        {user ? <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                                className="nav-link"
                                to="/login"
                                onClick={() => logOut()}>Log out</NavLink>
                        </li> : ''}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar