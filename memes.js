const express = require("express");
const app = express();
app.set("view engine", "ejs");
const https = require("https");

app.get("/", function (req, res) {
  // let imageUrl=""
  const url = "https://meme-api.herokuapp.com/gimme";
  https.get(url, function (response) {
    response.on("data", function (data) {
      const memes = JSON.parse(data);
      let imageUrl = memes.url;
      // console.log(imageUrl);
      // res.send("<img src=" + imageUrl + ">");
      return res.json({ url: imageUrl });
    });
  });
});

app.listen(3000, function () {
  console.log("server is running at port 3000");
});
