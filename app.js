import express from "express";
import { makewal, makewalUrl } from "./walset.js";
import data from "./data/tr.json" assert { type: "json" };
import Collation from "./backend/col.js";

const app = express();
const port = 3001;
import cors from "cors";

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

app.get("/tr", async (req, res) => {
  res.json(data);
});

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
