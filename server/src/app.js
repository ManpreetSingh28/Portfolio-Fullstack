const express = require("express");
const app = express();
app.use(express.json());

const port = 8080;

app.listen(port, async () => {
  console.log(`App is listening at ${port}`);
});
