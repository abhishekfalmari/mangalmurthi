const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userAPI = require("./auth/user");
const apiRoutes = express.Router();
const config = require("./helpers/config");


mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://127.0.0.1/mangalmurti",
  { useUnifiedTopology: true, useNewUrlParser: true },
  function (err) {
    if (err) console.log(err);
    else {
      console.log("------------Mangalmurti Database connected------------");
    }
  }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// this route can be used to ensure other webpages can't access your api
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

// routes that handle requests
app.use('/user', userAPI); // user routes

apiRoutes.use(async (req, res, next) => {
  // console.log(req.headers);
  try{
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        let tokenVerify = await jwt.verify(token, config.PRIVATE_KEY);
        req.decoded = decoded;  
        console.log(decoded);
        next();
    }
    else {
      // if there is no token
      // return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.'
      });
    }
  }catch(err){
    return res.status(401).json({ success: false, message: 'Failed to authenticate token.' });      
  }
});

app.use((req, res, next) => {
  const error = new Error("No route with this corresponding URL was found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
