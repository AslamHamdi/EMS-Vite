const express = require("express")
const PORT = 5000
const app = express()

app.get("/api/v1", (req, res) => {
  res.send("hello !!!!");
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));