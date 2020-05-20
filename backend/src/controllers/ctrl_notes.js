import noteModel from "../models/md_notes";

const notesCtrl = {}

notesCtrl.getNotes = async (req, res) => {
    const data = await noteModel.find();
    res.json(data)
}

notesCtrl.postNote = async (req, res) => {
    const {title, content, author, date} = req.body;
    const newNote = new noteModel({
        title: title,
        content: content,
        author: author,
        date: date
    })
    
    let pass = true;
    if(newNote.title.length <= 0){
        pass = false
    }
    if(pass){
        // DB
        try {
            await newNote.save()
            res.json({message: "Saved!"})
            
        } catch (error) {
            res.json({message: "Error"})
        }
    }
}

notesCtrl.oneNote = async (req, res) => {
    const id = req.params.id
    if(id.length <= 0) {res.json({message: 'Error en la nota'})}
    try {
        const data = await noteModel.findById(id)
        console.log(data)
        res.json(data)
    } catch (error) {
        res.json({message: "Note doesen't exist"})
    }
}

notesCtrl.updNote = async (req, res) => {
    const id = req.params.id
    const {title, content, author, date} = req.body
    const objNote = {
        title,
        content,
        author,
        date
    }
    if(id.length <= 0) {res.json({message: 'Error'})}
    try {
        const data = await noteModel.findOneAndUpdate(id, objNote, {new: true})
        res.json(data)
    } catch (error) {
        res.json({message: "Error, we could't update the note"})
    }
}

notesCtrl.delNote = async (req, res) =>{
    const id = req.params.id
    if(id.length <= 0) {res.json({message: 'Error en la nota'})}
    try {
        await noteModel.findByIdAndDelete(id)
        res.json({message: "Deleted"})
    } catch (error) {
        res.json({message: "Error, we could't find the note"})
    }
}

module.exports = notesCtrl