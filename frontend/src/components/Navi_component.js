import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navi_component extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">React note app</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Notes <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/new-note">New Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/new-user">New user</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
