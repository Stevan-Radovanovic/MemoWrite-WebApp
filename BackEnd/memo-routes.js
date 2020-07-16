const express = require("express");
const Memo = require("./memo-model");
const router = express.Router();

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const memo = new Memo({
    text: "Test",
  });

  try {
    await memo.save();
    res.status(201).json({ signal: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});
router.get("/", async (req, res, next) => {
  try {
    const memos = await Memo.find();
    console.log(memos);
    res.status(200).json({ memos: memos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

module.exports = router;
