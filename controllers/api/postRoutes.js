const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if (!postData) {
      return res.render('error', {
        message: "No post found with this id!"
      });
    }
    res.status(200).json(postData);
  }
  catch {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      return res.render('error', {
        message: "No post found with this id!"
      });
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
