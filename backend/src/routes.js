const routes = require("express").Router();
const { request } = require("express");
const multer = require("multer");
const multerConfig = require('./config/multer');

routes.post("/posts", multer(multerConfig).single('file'), (req, res) => {
  console.log(req.file);

  return res.json({ hello: "Morada" });
});

module.exports = routes;