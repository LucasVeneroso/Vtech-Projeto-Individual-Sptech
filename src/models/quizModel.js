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
function listarDados(idUsuario) {
  var instrucaoSql = `
        SELECT nuvem, historia_nuvem, vantagens_nuvem, iam, ec2, s3 FROM quiz WHERE id_usuario = ${idUsuario} ORDER BY 
        id DESC LIMIT 1;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contarAcertos(idUsuario) {
  var instrucaoSql = `
        SELECT num_acertos FROM quiz WHERE id_usuario = ${idUsuario} ORDER BY id DESC LIMIT 1;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contarTentativas(idUsuario) {
  let instrucaoSql = `SELECT COUNT(id_usuario) as tentativas FROM quiz WHERE id_usuario = ${idUsuario};`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  inserirDados,
  listarDados,
  contarTentativas,
  contarAcertos,
};
