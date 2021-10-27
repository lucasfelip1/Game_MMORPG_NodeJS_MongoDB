module.exports = function(application){
	application.get('/cadastro', function(req, res){
		application.app.controllers.cadastro.cadastroController(application,req,res);
	});

	application.post('/cadastrar', function(req, res){
		application.app.controllers.cadastro.cadastrarController(application,req,res);
	});
}