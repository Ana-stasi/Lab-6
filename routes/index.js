var express = require('express');
var router = express.Router();

//роутинг (прописываем путь к каждому файлику)
router.get('/', function(req, res, next) {
  res.sendFile('../public/index.html');
});
router.get('/', function(req, res, next) {
  res.sendFile('../public/index.html');
});
router.get('/stylesheets/main.css', function(req, res) {
  res.sendFile(__dirname + "/" + "main.css");
});

module.exports = router;
