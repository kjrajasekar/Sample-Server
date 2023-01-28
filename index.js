const parser = require('body-parser');
const express = require("express");
require("./config/database").connect();
const user = require('./operations/user-operations')
var cors = require('cors')

const app = express()
app.use(parser.urlencoded({ extended: true, limit: '50mb' }));
app.use(parser.json({ limit: '50mb', extended: false }
))
app.use(cors())

app.get("/", async (req, res) => {
    console.log("client connected")
    res.status(201).json({ message: "connected"});
  });

  app.post('/user/signin',check, user.userlogin)
app.post('/user/signup',user.addUser)


app.listen(4455, () => {
    console.log('Server running ');
});