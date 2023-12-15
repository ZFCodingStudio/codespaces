import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("来自codespaces的问候");
});

app.get("/codespaces", (req, res) => {
  res.send("来自codespaces的问候,codespaces url");
});

app.post("/", (req, res) => {
  res.send("来自codespaces的问候,post那边的朋友");
});

app.listen(port, () => {
  console.log(`express js 正常运行于端口 ${port}`);
});
