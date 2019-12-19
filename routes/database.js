var express = require("express");
var router = express.Router();

const db = require("../db.js");
/* GET users listing. */
router.get("/", function(req, res, next) { //получаем данные с бд (на клиент, отправляем их с сервера)
  db.all("SELECT * FROM cars", (err, rows) => res.send(rows));
});

router.post("/", (req, res) => { //записываем данные в бд
  const { owner, model, number } = req.body;
  db.run(`INSERT INTO cars VALUES (NULL, '${owner}','${model}', '${number}')`);
  res.sendStatus(200);
});
module.exports = router;
