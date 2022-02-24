import express from "express";

const router = express.Router();

router.get('/posts', (req, res) => {
    res.send('we are posts')

});

export default router;