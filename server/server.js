const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use("/api/v1/portfolio", require("../server/routes/portfolioRoute"));
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// app.get("/", (req, resp) => {
//   resp.send("<h1>Welcome to node server</h1>");
// });
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
