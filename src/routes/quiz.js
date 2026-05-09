var express = require(express);
var router = express.Router();
var quizController = require("../controllers/quizController");

//cadastra uma tentativa de quiz
router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
})

//Puxar do banco de dados
router.get("/listar", function (req, res) {
    quizController.listar(req, res);
});

module.exports = router;