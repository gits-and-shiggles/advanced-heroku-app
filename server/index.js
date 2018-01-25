// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
// import passport from "passport";
import OrderRoutes from "./routes/OrderRoutes";
import ProductRoutes from "./routes/ProductRoutes";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://rhodestraveler:rhodestraveler@ds143907.mlab.com:43907/aca-final-project");

const app = express();
app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile("public/index.html");
});
app.use(bodyParser.json());
app.use(OrderRoutes);
app.use(ProductRoutes);



// const authStrategy = passport.authenticate("authStrategy", { session: false });
// app.use(authStrategy);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
