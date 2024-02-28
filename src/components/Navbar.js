import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {

    render() {
        return (
            <>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                        <div className="container-fluid">
                            <Link className="navbar-brand" href="/" style={{ fontFamily: "sans-serif" }}>NewsMonkey</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to={"/"} style={{ fontFamily: "sans-serif" }}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to='/business' style={{ fontFamily: "sans-serif" }}>Business</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to='/sports' style={{ fontFamily: "sans-serif" }}>Sports</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to='/entertainment' style={{ fontFamily: "sans-serif" }}>Entertainment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to='/health' style={{ fontFamily: "sans-serif" }}>Health</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/about"} style={{ fontFamily: "sans-serif" }}>About</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}

export default Navbar
