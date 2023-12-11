const mongoose = require('mongoose')

// ?        Url-Schema creation            
const urlSchema = mongoose.Schema({
    shortId: {
        type : String,
        required : true,
        unique : true
    },
    redirectURL: {
        type : String,
        required : true,
        // unique: true
    },
    // visitHistory : [{timestamps : {type: Number}}]

},{ timestamps : true})


// ?       Schema's Model Creation          
const URL = mongoose.model('url', urlSchema)
module.exports = {URL}