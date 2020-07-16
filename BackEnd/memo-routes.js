const express = require("express");

const router = express.Router();

router.post("/", (req, res, next) => {
  console.log("Post Activated");
});
router.get("/", (req, res, next) => {
  console.log("Get Activated");
});

module.exports = router;
