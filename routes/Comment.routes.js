const express = require("express");
const CommentSchema = require("../models/Comment");
const router = express.Router();

//API REST

//GET
router.get("/", async (req, res) => {
  const Comment = await CommentSchema.find();
  res.json(Comment);
});

//GET BY USER
router.get("/user/:user", async (req, res) => {
  const Comment = await CommentSchema.find({ user: req.params.user });
  res.json(Comment);
});

//GET BY demandId
router.get("/:demandId", async (req, res) => {
  const Comment = await CommentSchema.find({ demandId: req.params.demandId });
  res.json(Comment);
});

//GET BY DATE
router.get("/lastAdded/lastAdded", async (req, res) => {
  const Comment = await CommentSchema.find().sort({ dateOfUpload: -1 }).limit(4);
  res.json(Comment);
});

//DELETE Comment

router.delete("/:id", async (req, res) => {
  try {
    await CommentSchema.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Comment doesn't exist!" });
  }
});

//CREATE Comment
router.post("/newComment", async (req, res) => {
  const Comment = new CommentSchema({
    demandId: req.body.demandId,
    comment: req.body.comment,
    userUID: req.body.userUID,
    email: req.body.email,
    title: req.body.title,
    price: req.body.price,
    link: req.body.link,
    user: req.body.user
  });
  await Comment.save();
  res.send(Comment);
});

//UPDATE Comment

router.patch("/:id", async (req, res) => {
  try {
    const Comment = await CommentSchema.findOne({ _id: req.params.id });

    if (req.body.comment) {
      Comment.comment = req.body.comment;
    }
    if (req.body.email) {
      Comment.email = req.body.email;
    }
    if (req.body.userUID) {
      Comment.userUID = req.body.userUID;
    }

    await Comment.save();
    res.send(Comment);
  } catch {
    res.status(404);
    res.send({ error: "Comment doesn't exist!" });
  }
});

module.exports = router;
