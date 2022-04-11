const express = require("express");
const dotenv = require("dotenv");
const cardInfo = require("./routes/cardInfo");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

connectDB();

app.get("/", (req, res) => {
  res.send("Food Delivery App Server");
});

app.use("/api/cardinfo", cardInfo);

app.listen(PORT, () => {
  console.log(`Food Delivery App in running on port ${PORT}`);
});
