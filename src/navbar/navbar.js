import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import "./navbar.css"

import { AppContext } from "../contextService/contextservice"

export default function Navbar() {

    let context = useContext(AppContext)
    let [userState, setUserState] = context.userState;
    let [user, setUser] = context.user;

    let history = useHistory();

    useEffect(async () => {
        let url = String(process.env.REACT_APP_BACKEND_URL) + '/checkloginstatus';
        let statusRequest = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            mode: "cors"
        })
        if (statusRequest.status == 200) {
            let user = await statusRequest.json()
            setUserState(true);
            setUser(user)
            history.push("/")
        }
    }, [])

    async function handleLogout(e) {

        let url = String(process.env.REACT_APP_BACKEND_URL) + "/logout"

        let logoutReq = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            mode: "cors",
        })

        if (logoutReq.status == 200) {
            setUserState(false)
            setUser({})
            history.push("/")
        } else {
            console.log("error occured")
        }

    }

    if (userState) {
        return (
            <>
                <header className="header-area header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">
                                    <div className="logo"> CHATME </div>
                                    <ul className="nav">
                                        <Link to="/">
                                            <li className="menu-items">Home</li>
                                        </Link>
                                        <li className="menu-items">About</li>

                                        <li className="menu-items">{`Welcome-${user.name}`}</li>

                                        <button className="log-out-btn" onClick={(e) => handleLogout(e)}>Logout</button>

                                        <Link to="/dashboard">

                                            <li className="menu-items">Dashboard</li>
                                        </Link>

                                    </ul>
                                    <a className="menu-trigger"><span>Menu</span></a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )

    } else {
        return (
            <>
                <header className="header-area header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">
                                    <div className="logo"> CHATME </div>
                                    <ul className="nav">
                                        <Link to="/">
                                            <li className="menu-items">Home</li>
                                        </Link>
                                        <li className="menu-items">About</li>
                                        <Link to="/login">
                                            <li className="menu-items">Login</li>
                                        </Link>
                                        <Link to="Register">
                                            <li className="menu-items">Register</li>
                                        </Link>
                                        <li className="menu-items">Contact Support</li>
                                    </ul>
                                    <a className="menu-trigger"><span>Menu</span></a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
