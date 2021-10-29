const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
  if (req.session.logged_in == null) {
    res.status(404).send("Login to comment");
  } 
  else {
    try {
        const newComment = await Comment.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newComment);
      } catch (err) {
        res.status(400).json(err);
      }
  }
});

module.exports = router;