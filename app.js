import express from "express";
import { makewal, makewalUrl } from "./walset.js";
// import data from "./data/tr.json" assert { type: "json" };
import Collation from "./backend/col.js";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const port = 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());

app.get("/setwal/:wal", async (req, res) => {
  //seting the wallpaper
  const { link } = req.query;
  const { wal } = req.params;
  console.log(wal, link);

  if (wal === "link") {
    link ? makewalUrl(link) : console.log("no link they say ");
  } else {
    await makewal(wal);
  }

  res.json({ done: true });
});

app.get("/", () => {
  console.log("got someone ");
});

// app.get("/tr", async (req, res) => {
//   res.json(data);
// });

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function Waloop(lst) {
  let file;
  let num = 0;
  do {
    file = await fs.readFileSync("./data/walloop.json", "utf-8");
    file = JSON.parse(file);

    if (file.loop) {
      await makewalUrl(file.list[num]);
    }
    if (num + 1 === file.list.length) {
      num = 0;
    } else {
      num++;
    }
    await sleep(5000);
  } while (file.loop);
}
// app.post("/walloop", async (req, res) => {
//   let file = await fs.readFileSync("./data/walloop.json", "utf-8");
//   file = JSON.parse(file);
//   file.loop = true;
//   file.list = [...req.body.pics];
//   console.log(file);

//   await fs.writeFileSync("./data/walloop.json", JSON.stringify(file), "utf-8");
// });

// Waloop();
// app.get("/col/:name", (req) => {
//   let col = new Collation("./data/coll.json");
//   const { name } = req.params;
//   const { link } = req.query;

//   console.log(name, link);
//   console.log(col.data);
//   if (!Object.keys(col.data).includes(name)) {
//     col.addCol(name);
//   }

//   if (!col.data[name].includes(link) && !(link === undefined)) {
//     col.additem(name, link);
//   }
//   col.end();

//   res.json({ done: true });
// });

// app.get("/col/:name", (req) => {
//   let col = new Collation("./data/coll.json");
//   const { name } = req.params;

//   if (!Object.keys(col.data).includes(name)) {
//     col.addCol(name);
//     console.log("in if ");
//   } else {
//     console.log("in else ", name, link);

//     col.end();
//   }
// });

// app.get("/col", (req, res) => {
//   let col = new Collation("./data/coll.json");
//   res.json(col.data);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
