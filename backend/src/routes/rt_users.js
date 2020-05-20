import { Router } from "express";
import { getUsers, postUser, delUser } from "../controllers/ctrl_users";
const router = Router()

router.route('/')
    .get(getUsers)
    .post(postUser)

router.route('/:id')
    .delete(delUser)


module.exports = router