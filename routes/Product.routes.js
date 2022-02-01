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
router.get("/:id", async (req, res) => {
  const product = await ProductSchema.findOne({_id: req.params.id});
  console.log(product);
  res.json(product);
});

//GET BY USER
router.get("/user/:user", async (req, res) => {
  const product = await ProductSchema.find({user: req.params.user});
  console.log(product);
  res.json(product);
});

//GET BY TYPE
router.get("/type/:type", async (req, res) => {
  const product = await ProductSchema.find({type: req.params.type});
  console.log(product);
  res.json(product);
});

//GET BY SOLD
router.get("/sold/sold", async (req, res) => {
  const product = await ProductSchema.find().sort({sold: -1}).limit(4);
  console.log(product);
  res.json(product);
});

//GET BY DATE
router.get("/lastAdded/lastAdded", async(req,res) => {
  const product = await ProductSchema.find().sort({dateOfUpload: -1}).limit(4);
  console.log(product);
  res.json(product);
})


//DELETE PRODUCT

router.delete("/:id", async (req, res) => {
	try {
		await ProductSchema.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Product doesn't exist!" })
	}
});

//CREATE POST
router.post("/newProduct", async (req,res) => {
  const product = new ProductSchema({
    type: req.body.type,
    name: req.body.name,
    weight: req.body.weight,
    brand: req.body.brand,
    image: req.body.image,
    energeticValue: req.body.energeticValue,
    fat: req.body.fat,
    saturedFats: req.body.saturedFats,
    carbohydrates: req.body.carbohydrates,
    sugars: req.body.sugars,
    dietaryFiber: req.body.dietaryFiber,
    protein: req.body.protein,
    salt: req.body.salt,
    description: req.body.description,
    price: req.body.price,
    sold: req.body.sold,
    calification: req.body.calification,
    origin: req.body.origin,
    user: req.body.user,
    dateOfUpload: req.body.dateOfUpload
	})
	await product.save()
  res.send(product)
});

//UPDATE PRODUCT

router.patch("newProduct/:id", async (req, res) => {
	try {
		const product = await ProductSchema.findOne({ _id: req.params.id })

		if (req.body.name) {
			product.name = req.body.name
		}
		if (req.body.type) {
			product.type = req.body.type
		}
    if (req.body.weight) {
			product.weight = req.body.weight
		}
    if (req.body.brand) {
			product.brand = req.body.brand
		}
    if (req.body.image) {
			product.image = req.body.image
		}
    if (req.body.energeticValue) {
			product.energeticValue = req.body.energeticValue
		}
    if (req.body.fat) {
			product.fat = req.body.fat
		}
    if (req.body.saturedFats) {
			product.saturedFats = req.body.saturedFats
		}
    if (req.body.carbohydrates) {
			product.carbohydrates = req.body.carbohydrates
		}
    if (req.body.sugars) {
			product.sugars = req.body.sugars
		}
    if (req.body.dietaryFiber) {
			product.dietaryFiber = req.body.dietaryFiber
		}
    if (req.body.protein) {
			product.protein = req.body.protein
		}
    if (req.body.salt) {
			product.salt = req.body.salt
		}
    if (req.body.description) {
			product.description = req.body.description
		}
    if (req.body.price) {
			product.price = req.body.price
		}
    if (req.body.origin) {
			product.origin = req.body.origin
		}
    if (req.body.dateOfUpload) {
			product.dateOfUpload = req.body.dateOfUpload
		}



		await product.save()
		res.send(product)
	} catch {
		res.status(404)
		res.send({ error: "Product doesn't exist!" })
	}
});


module.exports = router;
