import express from "express";
import { makewal, makewalUrl } from "./walset.js";
import data from "./data/tr.json" assert { type: "json" };
import Collation from "./backend/col.js";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import store from "store";
import { LocalStorage } from "node-localstorage";

try {
  if (1 == 1) {
    localStorage === undefined;
  }
} catch {
  global.localStorage = new LocalStorage("./scratch");
}

var num = 0;
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
  localStorage.setItem("loop", "false");
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

app.get("/tr", async (req, res) => {
  res.json(data);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function Waloop(lst) {
  let loop = true;
  while (true) {
    do {
      if (localStorage.getItem("loop") === "true") {
        await makewalUrl(localStorage.getItem("list").split(",")[num]);
        await sleep(5000);
      }
      if (num + 1 === localStorage.getItem("list").split(",").length) {
        num = 0;
      } else {
        num++;
      }
    } while (localStorage.getItem("loop") === "true");

    await sleep(1000);
  }
}

app.post("/walloop", async (req, res) => {
  num = 0;
  localStorage.setItem("list", [req.body.pics]);
  localStorage.setItem("loop", "true");
  console.log(
    store,
    store.get("list"),
    localStorage.getItem("list").split(",").length
  );
});
Waloop();

console.log(store.get("list"));
app.get("/col/:name", (req) => {
  let col = new Collation("./data/coll.json");
  const { name } = req.params;
  const { link } = req.query;

  console.log(name, link);
  console.log(col.data);
  if (!Object.keys(col.data).includes(name)) {
    col.addCol(name);
  }

  if (!col.data[name].includes(link) && !(link === undefined)) {
    col.additem(name, link);
  }
  col.end();

  res.json({ done: true });
});

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

app.get("/col", (req, res) => {
  let col = new Collation("./data/coll.json");
  res.json(col.data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
