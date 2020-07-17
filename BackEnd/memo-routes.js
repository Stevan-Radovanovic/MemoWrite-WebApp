const express = require("express");
const Memo = require("./memo-model");
const { response } = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const memo = new Memo({
    text: req.body.text,
    date: req.body.date,
  });

  try {
    await memo.save();
    res.status(201).json({ signal: true });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const memos = await Memo.find();
    res.status(200).json({ memos: memos });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
