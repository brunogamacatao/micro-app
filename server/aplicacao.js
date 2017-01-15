// Imports gerais
var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var constantes   = require('./config/constantes');

/**
 * Criação de uma classe responsável por configurar e inicar a aplicação.
 */ 
var Aplicacao = function() {
  this.app = express();

  // view engine setup
  this.app.set('views', path.join(__dirname, constantes.VIEWS_PATH));
  this.app.set('view engine', constantes.VIEW_ENGINE);

  this.setupMiddleware();
  this.setupLiveReload();
};

/**
 * Configuração das rotas da aplicação
 */
Aplicacao.prototype.setupRoutes = function() {
  // Rotas
  this.app.use('/', require('./routes/index'));
  this.app.use('/posts', require('./routes/posts'));
  this.app.use('/users', require('./routes/users'));
};

/**
 * Configuração do middleware da aplicação.
 * Um middleware é uma lista de funções que são chamadas, sem sequência, para
 * cada request. Uma função do middleware pode modificar o request, enviar dados
 * para o response, ou delegar o processamento para a função seguinte (next).
 */
Aplicacao.prototype.setupMiddleware = function() {
  // Em primeiro lugar é feito o tratamento geral das requisições
  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  this.app.use(logger('dev'));
  this.app.use(bodyParser.json());
  this.app.use(bodyParser.urlencoded({ extended: false }));
  this.app.use(cookieParser());
  this.app.use(express.static(path.join(__dirname, constantes.STATICS_PATH)));

  // Em seguida, são chamadas as rotas da aplicação
  this.setupRoutes();

  // Caso nenhuma rota atenda a requisição, as funções de erro são executadas
  this.app.use(this.pageForFoundErrorHandler);
  this.app.use(this.generalErrorHandler);
};

/**
 * Configura o live reload dos dados do cliente. Ou seja, sempre que páginas,
 * scripts ou folhas de estilo forem alteradas, o browser irá recarregar a 
 * aplicação.
 */
Aplicacao.prototype.setupLiveReload = function() {
  var livereload = require('livereload');

  // This is different form http.createServer() or app.createServer()
  var reloadServer = livereload.createServer();

  reloadServer.config.exts.push('ejs');  // Enable live reload for ejs files
  reloadServer.watch(__dirname);  // Enable watch on complete app folder

  // You can also enable watch on multiple folders:
  reloadServer.watch([__dirname + '/' + constantes.STATICS_SRC_PATH]);
};

Aplicacao.prototype.pageForFoundErrorHandler = function(err, req, res, next) {
  // catch 404 and forward to error handler
  this.app.use(function(req, res, next) {
    var err = new Error('Página não encontrada');
    err.status = 404;
    next(err);
  });  
};

Aplicacao.prototype.generalErrorHandler = function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');  
};

module.exports = Aplicacao;
