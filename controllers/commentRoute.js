const router = require('express').Router();
const { Comment } = require('../models/');
const withAuth = require('../utils/auth');

// localhost:3001/comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.userId
        });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;