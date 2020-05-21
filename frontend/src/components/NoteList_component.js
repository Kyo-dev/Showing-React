import React, { Component } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'

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
    removeNote = async(id) => {
        await axios.delete(`http://localhost:4000/api/notes/${id}`)
        this.getNotes()
    }
    render() {
        return (
            <div className="row">
                {
                    this.state.state_notes.map(e => (
                        <div className="col-md-4 p-2" key={e._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{e.title}</h5>
                                    <Link className="btn btn-info" to={`/edit-note/${e._id}`}>
                                        Update
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p>{e.content}</p>
                                    <p>{e.author}</p>
                                    <p>{format(e.date)}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.removeNote(e._id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
