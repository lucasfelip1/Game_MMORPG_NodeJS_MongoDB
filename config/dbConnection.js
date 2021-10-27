/*importar o mongoDB */
var mongo = require('mongodb');

var connMongoDB = function(){
	var db = new mongo.Db(
		'gameMMORPG', //NOME DO BANCO DE DADOS
		new mongo.Server(
			'localhost',//STRING COM ENDERECO SERVIDOR DO DB
			27017,//PORTA DE CONEXAO
			{} //OBJETO DE OPCOES DE CONFIGURACAO DO SERVIDOR
		),
		{} //OBJETO DE CONFIGURACOES ADICIONAIS

	);

	return db;
}

module.exports = function(){
	
	return connMongoDB;
}