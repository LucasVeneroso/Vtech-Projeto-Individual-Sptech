var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM Usuario WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}
