var database = require("../database/config");

function inserirDados(
  nuvem,
  historia_nuvem,
  vantagens_nuvem,
  iam,
  ec2,
  s3,
  num_acertos,
  id_usuario,
) {
  console.log("ACESSOU A INSERÇÃO DE DADOS DO QUIZ");
  var instrucaoSql = `INSERT INTO quiz (nuvem, historia_nuvem, vantagens_nuvem, iam, ec2, s3, num_acertos, id_usuario) VALUES ('${nuvem}', '${historia_nuvem}', '${vantagens_nuvem}', '${iam}', '${ec2}', '${s3}', '${num_acertos}', '${id_usuario}')`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function listarDados() {
  var instrucaoSql = `
        SELECT q.num_acertos, q.historia_nuvem, q.vantagens_nuvem, q.iam, q.ec2, q.s3, u.nome FROM quiz q JOIN Usuario u ON q.id_usuario = u.id;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  inserirDados,
  listarDados,
};
