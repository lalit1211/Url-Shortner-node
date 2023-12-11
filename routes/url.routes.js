const express = require('express')
const {
	newShortURL,
	analytics,
	redirection,
} = require("../controller/url.Controller");


const router = express.Router()

router.get('/', newShortURL)
// router.get('/analytics/:shortId', analytics)
router.get("/:shortId", redirection);


module.exports = router