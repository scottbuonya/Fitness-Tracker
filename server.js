const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const db = require("./models")

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI) || "mongodb://localhost/workoutdb", { useNewUrlParser: true };

require("./controllers/api-routes")(app); 
require("./controllers/html-routes")(app);

app.listen(PORT, () => {
    console.log("listening on PORT:" + PORT)
})