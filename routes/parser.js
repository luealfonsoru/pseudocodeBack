const express = require('express');
const router = express.Router();

const lexer = require('../controllers/lexer')

router.post('/', (req, res, next) => {
  const response = lexer(req.body.code)
  console.log(response)
  if (response.code !== 1) {
    res.status(200).send({ error: 0, info: { message: "success" }, response })
  } else {
    res.status(400).send(response)
  }
});

module.exports = router;
