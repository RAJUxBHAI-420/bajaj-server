equire('dotenv').config()
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  axios
    .get("https://hiring.bajajfinservhealth.in/api/renderMe")
    .then((response) => {
      const data = response.data;
      res.send(data)
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Port at ${port}`);
});
