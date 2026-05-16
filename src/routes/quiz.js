var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");

//cadastra uma tentativa de quiz
router.post("/inserirDados", function (req, res) {
  quizController.inserirDados(req, res);
});

//Puxar do banco de dados
router.get("/listarDados", function (req, res) {
  quizController.listarDados(req, res);
});
router.get("/contarTentativas/:idUsuario", function (req, res) {
  quizController.contarTentativas(req, res);
});

module.exports = router;
