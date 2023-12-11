// ?        Important Imports              
const express = require("express")
const {connectionDB} = require("./models/connection")
const urlRoute = require('./routes/url.routes')


// ?        Express App Creation             
const app = express()
const PORT = 8000



// ?  Body parser builtin Express Middleware      
app.use(express.json())   //JSON BODY PARSER




// ?    Connection Established with MongoDB      
connectionDB()

// ?                                         
app.use('/api/url', urlRoute)
// app.get("/:shortId", async (req, res) => {
// 	const shortId = req.params.shortId;
// 	const entry = await URL.findOneAndUpdate(
// 		{
// 			shortId,
// 		},
// 		{
// 			$push: {
// 				visitHistory: {
// 					timestamp: Date.now(),
// 				},
// 			},
// 		},
// 	);
// 	res.redirect(entry.redirectURL);
// });

// ?       Server is Listening             
app.listen(PORT, ()=>{
    console.log(`Server is Running on port ${PORT}`)
})