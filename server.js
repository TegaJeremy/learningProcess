const express = require('express')
const app = express()
const PORT = 2890
app.use(express.json())
const db = require('./config/configs')
const schoolRouter = require('./routers/schoolRouter')


app.use(schoolRouter)


app.listen(PORT, ()=>{
    console.log(`app is listening to ${PORT}`)
})

