import express from 'express'
import dbConnection from './database/dbConnection.js'
import { bootsrap } from './src/modules/boostrap.js'
const app = express()
const port = 3000
app.use("/uploads",express.static('uploads'))
app.use(express.json())
    bootsrap(app)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))