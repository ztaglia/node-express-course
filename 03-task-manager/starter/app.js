require('dotenv').config()
const connectDB = require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

// middleware 
app.use(express.static('./public'))
app.use(express.json())


// routes
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandler)


const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
