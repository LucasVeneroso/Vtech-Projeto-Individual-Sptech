var usuarioModel = require("../models/quizModel");

function inserirDados(req, res) {
  let nuvem = req.body.nuvemServer;
  let historia_nuvem = req.body.historia_nuvemServer;
  let vantagens_nuvem = req.body.vantagens_nuvemServer;
  let iam = req.body.iamServer;
  let ec2 = req.body.ec2Server;
  let s3 = req.body.s3Server;
  let num_acertos = req.body.num_acertosServer;
  let id_usuario = req.body.id_usuarioServer;

  if (nuvem == undefined) {
    res.status(400).send("Sua nuvem está undefined!");
  } else if (historia_nuvem == undefined) {
    res.status(400).send("Sua historia_nuvem está indefinida!");
  } else if (vantagens_nuvem == undefined) {
    res.status(400).send("Sua vantagens_nuvem está indefinida!");
  } else if (iam == undefined) {
    res.status(400).send("Seu iam está undefined!");
  } else if (ec2 == undefined) {
    res.status(400).send("Seu ec2 está undefined!");
  } else if (s3 == undefined) {
    res.status(400).send("Seu s3 está undefined!");
  } else if (num_acertos == undefined) {
    res.status(400).send("Seu num_acertos está undefined!");
  } else if (id_usuario == undefined) {
    res.status(400).send("Seu id_usuario está undefined!");
  } else {
    usuarioModel
      .inserirDados(
        nuvem,
        historia_nuvem,
        vantagens_nuvem,
        iam,
        ec2,
        s3,
        num_acertos,
        id_usuario,
      )
      .then(function (insercao_quiz) {
        console.log(`\nResultados encontrados: ${insercao_quiz.length}`);
        console.log(`Resultados: ${JSON.stringify(insercao_quiz)}`); // transforma JSON em String

        if (insercao_quiz.length == 1) {
          console.log(insercao_quiz);
          res.json({
            nuvem: insercao_quiz[0].nuvem,
            historia_nuvem: insercao_quiz[0].historia_nuvem,
            vantagens_nuvem: insercao_quiz[0].vantagens_nuvem,
            iam: insercao_quiz[0].iam,
            ec2: insercao_quiz[0].ec2,
            s3: insercao_quiz[0].s3,
            num_acertos: insercao_quiz[0].num_acertos,
            id_usuario: insercao_quiz[0].id_usuario,
          });
        } else if (insercao_quiz.length == 0) {
          res.status(403).send("Nada encontrado");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage,
        );

        res.status(500).json(erro.sqlMessage);
      });
  }
}

function listarDados(req, res) {
  let nuvem = req.param.nuvemServer;
  let historia_nuvem = req.param.historia_nuvemServer;
  let vantagens_nuvem = req.param.vantagens_nuvemServer;
  let iam = req.param.iamServer;
  let ec2 = req.param.ec2Server;
  let s3 = req.param.s3Server;
  let num_acertos = req.param.num_acertosServer;
  let id_usuario = req.param.id_usuarioServer;

  if (nuvem == undefined) {
    res.status(400).send("Sua nuvem está undefined!");
  } else if (historia_nuvem == undefined) {
    res.status(400).send("Sua historia_nuvem está indefinida!");
  } else if (vantagens_nuvem == undefined) {
    res.status(400).send("Sua vantagens_nuvem está indefinida!");
  } else if (iam == undefined) {
    res.status(400).send("Seu iam está undefined!");
  } else if (ec2 == undefined) {
    res.status(400).send("Seu ec2 está undefined!");
  } else if (s3 == undefined) {
    res.status(400).send("Seu s3 está undefined!");
  } else if (num_acertos == undefined) {
    res.status(400).send("Seu num_acertos está undefined!");
  } else if (id_usuario == undefined) {
    res.status(400).send("Seu id_usuario está undefined!");
  } else {
    quizModel;
  }
}

function contarTentativas(req, res) {
  let id_usuario = req.params.idUsuario;
  if (id_usuario == undefined) {
    res.status(400).send("Usuário não encontrado");
  } else {
    usuarioModel.contarTentativas(id_usuario)
      .then(function (resultado) {
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
      });
  }
}
module.exports = {
  inserirDados,
  listarDados,
  contarTentativas,
};
