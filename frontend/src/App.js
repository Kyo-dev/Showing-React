import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navi from "./components/Navi_component";
import NewNote from "./components/NewNote_component";
import NewUser from "./components/NewUser_component";
import NoteList from "./components/NoteList_component";

function App() {
  return (
    <Router>
      <Navi />
      <div className = "container p-4">
        <Route path="/" exact component = {NoteList} />
        <Route path="/edit-note/:id" component = {NewNote} />
        <Route path="/new-note" component ={NewNote} />
        <Route path="/new-user" component= {NewUser }/>
      </div> 
    </Router>
  );
}

export default App;
