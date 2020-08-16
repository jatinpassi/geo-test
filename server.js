const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist"));

// api other end point will go here

app.all("*", (req, res) => {
  res.status(200).sendFile(__dirname + "/dist/index.html");
});

app.listen(process.env.PORT || 3000);

//something have to change
