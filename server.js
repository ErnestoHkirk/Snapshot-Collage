//const express = require("express");
import express from "express";
// const fetch = require("node-fetch");
import fetch from "node-fetch";

const app = express();
const port = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
import path from "path";
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*"),
    (req, res) => {
      res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
    };
}

app.get("/fetch_image/*", async (req, res) => {
  console.log("/fetch_image endpoint called");
  const url =
    "https://www.qwant.com/?t=images&q=" + req.query.search + "&size=medium";
  const options = {
    method: "GET",
  };
  console.log(req.query.search);

  const response = await fetch(url, options)
    .then((res) => res.text())
    //.then((text) => console.log(text))
    .catch((e) => {
      console.log({
        message: "oh noes..",
        error: e,
      });
    });

  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//to run: node server.js
//to run better: nodemon server.js
