import express from 'express';
const router = express.Router();

router.get('/whoami', (req, res) => {
  res.send("You are a winner!!");
});

module.exports = router;
