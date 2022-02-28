const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

    try {

    } catch (error) {
        res.send('get request' + error)
    }
})

module.exports = router