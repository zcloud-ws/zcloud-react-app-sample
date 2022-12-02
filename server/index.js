const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use("/", express.static("app"));

app.get("/countries", (req, res) => {
  const countries = require("./country-names.json");
  res.json(countries);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
