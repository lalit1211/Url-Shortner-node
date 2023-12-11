const mongoose = require('mongoose')

async function connectionDB(){
    mongoose.connect("mongodb://localhost:27017/dummy").then(()=>{
        console.log("Connection Established With MongoDB Successfully")
    }).catch((err)=>{
        console.log(err);
    });
}
module.exports = {
    connectionDB
}