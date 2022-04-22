import express from "express";
import fetch from "node-fetch";
const app = express();
const port = process.env.PORT || 5000;
//import cors from "cors";

import path from "path";
const __dirname = path.resolve();

// const whitelist = [
//   "http://localhost:3000/*",
//   "http://localhost:5000/*",
//   "https://github.com/*",
// ];
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("** Origin of request " + origin);
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("Origin acceptable");
//       callback(null, true);
//     } else {
//       console.log("Origin rejected");
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
// app.use(cors(corsOptions));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("/"),
    (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    };
}

// app.get("/github/*", async (req, res) => {
//   console.log("/github");
//   res.redirect("https://github.com/ErnestoHkirk/Snapshot-Collage");
// });

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

// to run: node server.js
// to run better: nodemon server.js
// to debug: heroku logs --tail
