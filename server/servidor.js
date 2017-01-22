var http = require('http');
var path = require('path');

/**
 * Criação do servidor HTTP que irá executar a aplicação.
 * O servidor recebe como argumento, em sua criação, uma aplicação express.
 */
var Servidor = function(app) {
  this.app  = app;
  this.port = this.fetchPort();
};

/**
 * Obtém a porta de uma variável de ambiente ou define 3000 como padrão.
 */
Servidor.prototype.fetchPort = function() {
  return this.normalizePort(process.env.PORT || '3000');
};

/**
 * Normaliza a porta em um número, string, ou false.
 */
Servidor.prototype.normalizePort = function(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;  
};

Servidor.prototype.iniciaWebpack = function() {
  var webpack = require('webpack');
  var config = require('../webpack.config.dev');
  var DashboardPlugin = require('webpack-dashboard/plugin');

  var compiler = webpack(config);

  // Conecta o webpack com o dashboard plugin
  compiler.apply(new DashboardPlugin());

  var webpackDev = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
  });

  this.app.use(webpackDev);
  this.app.use(require('webpack-hot-middleware')(compiler));

  // Código que será executado quando a inicializaçõa tiver concluído
  webpackDev.waitUntilValid(function(){
    // Após a inicialização, abrir a aplicação em um navegador
    const url = 'http://localhost:3000';
    console.log('Servidor executando em:', url);
    require('open')(url);
  });

  // Hack para possibilitar trabalhar com o HTMLPlugin do webpack em memória
  this.app.use('*', function (req, res, next) {
    var filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, function(err, result){
      if (err) {
        return next(err);
      }

      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  });
};

/**
 * Método reponsável por iniciar o servidor
 */
Servidor.prototype.start = function() {
  this.iniciaWebpack();

  this.app.set('port', this.port);

  // Cria um servidor HTTP
  this.server = http.createServer(this.app);

  /**
   * Listen on provided port, on all network interfaces.
   */
  this.server.listen(this.port);
  this.server.on('error', this.onError.bind(this));
};

/**
 * Função executada sempre que um evento HTTP do tipo 'error' for lançado.
 */
Servidor.prototype.onError = function(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

module.exports = Servidor;