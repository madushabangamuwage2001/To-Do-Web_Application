const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const routes = require('./routes/ToDoRoute')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())


app.get('/test', (req, res) => {
    res.json({ message: 'Server is running' });
});



mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log("connecte to mongoDB...."))
    .catch((err)=> console.log(err))
    
    app.use(routes)

app.listen(PORT, () =>  console.log(`Listening on : ${PORT}`))
                                                                                                                              