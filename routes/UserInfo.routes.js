const express = require("express");
const UserInfoSchema = require("../models/UserInfo");
const router = express.Router();

//API REST

//GET
router.get("/", async (req, res) => {
  const userInfo = await UserInfoSchema.find();
  console.log(userInfo);
  res.json(userInfo);
});

//GET BY USER
router.get("/user/:user", async (req, res) => {
  const userInfo = await UserInfoSchema.find({ user: req.params.user });
  console.log(userInfo);
  res.json(userInfo);
});

//GET BY TYPE
router.get("/type/:type", async (req, res) => {
  const userInfo = await UserInfoSchema.find({ type: req.params.type });
  console.log(userInfo);
  res.json(userInfo);
});

//GET BY DATE
router.get("/lastAdded/lastAdded", async (req, res) => {
  const userInfo = await UserInfoSchema.find().sort({ dateOfUpload: -1 }).limit(4);
  console.log(userInfo);
  res.json(userInfo);
});

//DELETE userInfo

router.delete("/:id", async (req, res) => {
  try {
    await UserInfoSchema.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Demand doesn't exist!" });
  }
});

//CREATE USER
router.post("/", async (req, res) => {
  const userInfo = new UserInfoSchema({
    name: req.body.name,
    image: req.body.image,   
    userUID: req.body.userUID,
    shoppingChart: req.body.shoppingChart,
  });
  await userInfo.save();
  res.send(userInfo);
});

//UPDATE PRODUCT

router.patch("/:id", async (req, res) => {
  try {
    const userInfo = await UserInfoSchema.findOne({ _id: req.params.id });

    if (req.body.name) {
        userInfo.name = req.body.name;
    }
    if (req.body.image) {
        userInfo.image = req.body.image;
    }
    if (req.body.userUID) {
        userInfo.userUID = req.body.userUID;
    }
    if (req.body.shoppingChart) {
        userInfo.shoppingChart = req.body.shoppingChart;
    }

    await userInfo.save();
    res.send(userInfo);
  } catch {
    res.status(404);
    res.send({ error: "userInfo doesn't exist!" });
  }
});

module.exports = router;
