const express = require("express");
const { route } = require("./ROute/route");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page");
});

app.use("/employee", route);

app.listen(5050, () => {
  console.log("running on 5050");
});
