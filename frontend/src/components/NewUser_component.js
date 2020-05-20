import React, { Component } from 'react'
import axios from 'axios'

export default class NewUser_component extends Component {
    state = {
        users: [],
        username: ''
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users')
        this.setState({ users: res.data })
    }
    async componentDidMount() {
        this.getUsers()
    }

    onChange = e =>{
        this.setState({
            username: e.target.value
        })
        console.log(e.target.value)
        
    }
    onSubmit = async e => {
        e.preventDefault()
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        })
        this.setState({username: ''})
        this.getUsers()
    }

    // delete user
    onDoubleClick = async id =>{
        await axios.delete(`http://localhost:4000/api/users/${id}`)
        this.getUsers()
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card-body card">
                        <h3>Create new user</h3>
                        <form onSubmit = {this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value = {this.state.username}
                                    onChange={this.onChange }/>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Insert username
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(e => (
                                <li 
                                    className="list-group-item list-group-item-action" 
                                    key={e._id}
                                    onDoubleClick = {() => this.onDoubleClick(e._id)}>

                                    {e.username}
                                </li>))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}