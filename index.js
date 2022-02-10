const express = require('express')
const bodyParser = require('body-parser')
const request = require("request");

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.put('/webhooks/changeOwner', function (req, res) {
  console.log(req.body)
  res.send({
    body: req.body,
    message: 'From another server'
  })
})

app.listen(3000);
console.log('Node server running on port 3000');