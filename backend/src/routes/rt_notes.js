import { Router } from "express";
import { getNotes , postNote , oneNote, updNote, delNote } from "../controllers/ctrl_notes";
const router = Router();

router.route('/')
    .get(getNotes)
    .post(postNote)

router.route('/:id')
    .get(oneNote)
    .put(updNote)
    .delete(delNote)

module.exports = router;