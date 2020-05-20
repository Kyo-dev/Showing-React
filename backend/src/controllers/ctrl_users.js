import userModel from "../models/md_users"

const userCtrl = {}


userCtrl.getUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        res.json(users)
    } catch (error) {
        res.json({message: `We could't get users`})
    }
}

userCtrl.postUser = async (req, res) => {
    const {username} = req.body
    const newUser = new userModel({
        username
    })
    if(newUser.username.length <= 0){res.json({message: "Insert a username"})}
    try {
        const data = await newUser.save()
        res.json(data)
    } catch (error) {
        res.json({message: "Error!"})
    }
}

userCtrl.delUser = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id)
        res.json({message: "Removed"})
    } catch (error) {
        res.json({message: "Error!"})
    }
}

module.exports = userCtrl