const express = require("express");
const DemandSchema = require("../models/Demand");
const router = express.Router();

//API REST

//GET
router.get("/", async (req, res) => {
  const demand = await DemandSchema.find();
  console.log(demand);
  res.json(demand);
});

//GET BY USER
router.get("/user/:user", async (req, res) => {
  const demand = await DemandSchema.find({ user: req.params.user });
  console.log(demand);
  res.json(demand);
});

//GET BY TYPE
router.get("/type/:type", async (req, res) => {
  const demand = await DemandSchema.find({ type: req.params.type });
  console.log(demand);
  res.json(demand);
});

//GET BY DATE
router.get("/lastAdded/lastAdded", async (req, res) => {
  const demand = await DemandSchema.find().sort({ dateOfUpload: -1 }).limit(4);
  console.log(demand);
  res.json(demand);
});

//DELETE DEMAND

router.delete("/:id", async (req, res) => {
  try {
    await DemandSchema.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Demand doesn't exist!" });
  }
});

//CREATE POST
router.post("/ProductDemand", async (req, res) => {
  const demand = new DemandSchema({
    title: req.body.title,
    type: req.body.type,
    weight: req.body.weight,
    description: req.body.description,
    price: req.body.price,
    origin: req.body.origin,
    user: req.body.user,
    dateOfUpload: req.body.dateOfUpload,
  });
  await demand.save();
  res.send(demand);
});

//UPDATE PRODUCT

router.patch("/:id", async (req, res) => {
  try {
    const demand = await DemandSchema.findOne({ _id: req.params.id });

    if (req.body.type) {
      product.type = req.body.type;
    }
    if (req.body.weight) {
      product.weight = req.body.weight;
    }
    if (req.body.description) {
      product.description = req.body.description;
    }
    if (req.body.price) {
      product.price = req.body.price;
    }
    if (req.body.origin) {
      product.origin = req.body.origin;
    }
    if (req.body.dateOfUpload) {
      product.dateOfUpload = req.body.dateOfUpload;
    }

    await demand.save();
    res.send(demand);
  } catch {
    res.status(404);
    res.send({ error: "Demand doesn't exist!" });
  }
});

module.exports = router;
