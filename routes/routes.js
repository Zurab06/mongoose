const express = require("express");
const Student = require("../models/Student.model");
const router = express.Router();

router.post("/students", async (req, res) => {
  Student.create({
    name: "john",
    number: "1788545",
    age: 28,
  })
    .then(() => res.json("student added"))
    .catch(() => res.json("failed"));
});

router.delete("/students/:id", async (req, res) => {
  console.log(req.params);
  Student.findByIdAndRemove(req.params.id).then(() =>
    res.json("student removed")._construct.catch(() => res.json("failed"))
  );
});
router.patch("/students/:id", async (req, res) => {
  Student.findByIdAndUpdate(req.params.id, { name: req.body.name })
    .then(() => res.json("student updated"))
    .catch(() => res.json("failed "));
});
router.get("/students", (req, res) => {
  Student.find({})
    .then(() => res.json("students list"))
    .catch(() => res.json("faied"));
});

module.exports = router;
