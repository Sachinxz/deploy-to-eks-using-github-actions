const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("Hello World !");
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
