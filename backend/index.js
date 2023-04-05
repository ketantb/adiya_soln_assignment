const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 8081 
const mongoose = require('mongoose')
app.use(cors())
app.use(express.json())
require('./connectionDB.js')
const Query = require('./models/queryModel.js')

app.get("/", async (request, response) => {
    try{
        response.json({message: 'welcome to Adiya'})
    }
    catch(err){
        response.sendStatus(500).json({message: err})
    }
})

app.post("/contactus", async (request, response) => {
    try{
       const query = new Query(request.body)
       const queryData = await query.save()
       console.log(queryData)
       response.json({query})
    }
    catch(err){
        console.log(err)
        response.sendStatus(500).json({message: err})
    }
})

app.listen(PORT, () => {
    console.log(`listening to port no ${PORT}`)
})