const fs = require("fs");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/htmlRoute")(app);
require("./routes/apiRoute")(app);

app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });
  