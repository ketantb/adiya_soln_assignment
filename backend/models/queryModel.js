const mongoose = require('mongoose')

const querySchema = mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    subject: {type: String, require: true},
    phone: {type: String, require: true},
    query: {type: String, require: true}
})

const Query =  mongoose.model("query", querySchema)
module.exports = Query;