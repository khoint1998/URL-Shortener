const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortId = require('shortid');
const config = require('config');

const Url = require('../models/url');

//@route POST /api/url/shorten
//@desc  create short URL
router.post('/shorten', async (req,res) =>{
    const {longUrl} = req.body;
    const baseUrl = config.get('baseUrl');

    if(!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base URL')
    }

    // Create Url code
    const urlCode = shortId.generate();

    //Check longUrl
    if(validUrl.isUri(baseUrl)) {
        try {
            let url = await Url.findOne({longUrl})

            if(url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl: longUrl,
                    shortUrl: shortUrl,
                    urlCode: urlCode,
                    date: new Date()
                })

                await url.save();

                res.json(url);
            }
        } catch (err) {
            console.log(err);
            res.status(500).json('Server error')
        }
    } else {
        res.status(401).json('Invalid long Url')
    }
});

module.exports = router;