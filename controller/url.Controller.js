
const shortid = require('shortid')
const {URL} = require('../models/url.Schema')



// ?        URL controller Creation            
async function newShortURL(req, res){
    const body = req.body
    if(!body.url){ return res.status(400).json({
        error : "url is required"
    })}

    const shortId = shortid()
    const newURL = await URL.create({
        shortId : shortId,
        redirectURL : body.url,
        
    })
    res.status(200).json({id:shortId})
}


async function analytics(req, res){
    const shortId = req.params.shortId
    const result = await URL.findOne({shortId})

    res.json({
		totoalClicks: result.visitHistory.length,
		analytics: result.visitHistory,
	});
}

async function redirection(req, res){
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({shortId},{
        
    })

    res.redirect(entry.redirectURL)
}


// ?          URL Controller exporting           
module.exports = {
	newShortURL,
	analytics,
	redirection,
};