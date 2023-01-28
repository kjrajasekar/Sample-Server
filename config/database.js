const mongoose = require("mongoose");

const mongo_uri = "mongodb://localhost:27017/demodb"

exports.connect = () => {

  mongoose
    .connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.error("database connection failed"+error);
    });
};

