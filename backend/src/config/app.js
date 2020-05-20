import express, {json} from 'express'
import cors from 'cors'
const app = express()

// SECTION SETTING

app.set('port', process.env.PORT || 4000)

// !SECTION

// SECTION MIDDLEWARES

app.use(cors())
app.use(express.json()) //REVISAR SI ES NECESARIO


// !SECTION

// SECTION ROUTES

app.use('/api/users', require('../routes/rt_users'))
app.use('/api/notes', require('../routes/rt_notes'))

// !SECTION

export default app