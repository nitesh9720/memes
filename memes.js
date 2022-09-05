const express = require("express");
const app = express();
const https = require("https");
app.get("/", function (req, res) {
  const url = "https://meme-api.herokuapp.com/gimme";
  https.get(url, function (response) {
    response.on("data", function (data) {
      const memes = JSON.parse(data);
      var imageUrl = memes.url;
      console.log(imageUrl);
      res.send("<img src=" + imageUrl + ">");
    });
  });
});

app.listen(3000, function () {
  console.log("server is running at port 3000");
});
