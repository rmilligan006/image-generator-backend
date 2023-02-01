const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes/api");

const port = process.env.PORT;

// Enable all requests
app.use(cors());

// parsing application.json
app.use(express.json());
//parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/openai", routes);

app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}!`);
});
