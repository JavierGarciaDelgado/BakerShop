const express = require("express");
const ProductSchema = require("../models/Product");
const router = express.Router();

//API REST

//GET
router.get("/", async (req, res) => {
  const product = await ProductSchema.find();
  console.log(product);
  res.json(product);
});

//GET BY ID
router.get("/:name", async (req, res) => {
  const product = await ProductSchema.findOne({name:req.params.name});
  console.log(product);
  res.json(product);
});

module.exports = router;
