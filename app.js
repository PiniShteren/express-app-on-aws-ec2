const express = require('express');
const app = express();
const PORT = 8000;

app.get("/" , (req, res) => {
      res.send("<h1>Welcome to my back site!!</h1><h4>version 1.0</h4>");
});

app.get("/products", (req, res) => {
      res.send([
            {
                  id: 23946,
                  name: "product A",
                  price: 39,
            },
            {
                  id: 23946,
                  name: "product A",
                  price: 39,
            },
            {
                  id: 23946,
                  name: "product A",
                  price: 39,
            }
      ]);
});

app.listen(PORT, () => {
      console.log(`Server runnig on port ${PORT}`);
});