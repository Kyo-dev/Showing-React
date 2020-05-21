import React, { Component } from 'react'
import axios from 'axios'
export default class NoteList_component extends Component {

    state = {
        state_notes: []
    }

    getNotes = async () => {
        const res = await axios.get('http://localhost:4000/api/notes')
        this.setState({ state_notes: res.data })
    }
    componentDidMount() {
        this.getNotes()
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.state_notes.map(e => (
                        <div className="col-md-4 p-2" key={e._id}>
                            <div className="card">
                                <div className="card-header">
                                    <h5>{e.title}</h5>
                                </div>
                                <div className="card-body">
                                    <p>{e.content}</p>
                                    <p>{e.author}</p>
                                    <p>{e.date}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
