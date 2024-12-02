const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { route } = require("..");
const prisma = new PrismaClient();
const router = express.Router();
// const verifySecret = require('../middleware/verifySecret');

router.post("/create", async (req, res) => {
  const { userId, productId, count } = req.body;
  if (!userId || !productId || !count) {
    return res.status(404).json({
      error: "All fields required",
    });
  }
  const product = await prisma.shipping.create({
    data: { userId, productId, count },
  });
  return res.status(201).json(product);
});

router.put("/cancel", async (req, res) => {
  const shippingId = req.body;
//   if (shippingId == {}) {
//     return res.status(404).json({
//       error: "Missing shippingId",
//     });
//   }
  const product = await prisma.shipping.update({
    where: { id: Number(shippingId) },
    data: { status: "cancelled" },
  });
  return res.status(200).json(product);
});

router.get("/get", async (req, res) => {
  let userId = req.params;
  userId = userId.strip("=");
  console.log(userId);
  console.log(typeof req.url);
  const product = await prisma.shipping.findMany();
  return res.status(200).json(product);
});

router.get("/get/:userId", async (req, res) => {
  const userId = req.path;
  console.log(userId);
});
module.exports = router;
