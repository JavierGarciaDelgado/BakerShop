const express = require("express");
const FlourSchema = require("../models/Flour");
const router = express.Router();

//API REST

//GET
router.get("/", async (req, res) => {
  const flour = await FlourSchema.find();
  console.log(flour);
  res.json(flour);
});

//GET BY ID
router.get("/:name", async (req, res) => {
  const flour = await FlourSchema.findOne({name:req.params.name});
  console.log(flour);
  res.json(flour);
});

module.exports = router;
