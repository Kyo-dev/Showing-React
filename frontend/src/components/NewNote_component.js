import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class NewNote_component extends Component {

    state = {
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date()
    }

    async componentDidMount() {
        this.getUsers()
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users')
        this.setState({ 
            users: res.data,
            userSelected: res.data[0].username
        })
    }

    onSubmit = async e => {
        e.preventDefault()
        const newNote ={
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        }
        await axios.post('http://localhost:4000/api/notes', newNote)
        window.location.href = '/'
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeDate = e => {
        this.setState({date: e})
        console.log(e)
    }
    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-bady p-2">
                    <h4>New note</h4>
                    <div className="form-group">
                        <select
                            className="form-control"
                            name="userSelected"
                            onChange={this.onChange}
                        >
                            {
                                this.state.users.map(e =>
                                    <option key={e._id} value={e.username}>
                                        {e.username}
                                    </option>)
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="title"
                            placeholder="Title"
                            onChange={this.onChange}
                            required/>
                    </div>
                    <div className="form-group">
                        <textarea 
                            className="form-control"
                            name="content"
                            placeholder="Content"
                            onChange = {this.onChange}
                            required
                            ></textarea>
                    </div>
                    <div className="form-group">
                        <DatePicker 
                            className="form-control"
                            selected = {this.state.date}
                            onChange= {this.onChangeDate}
                            />
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Create
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
