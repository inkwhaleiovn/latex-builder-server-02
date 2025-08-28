const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! Server is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});