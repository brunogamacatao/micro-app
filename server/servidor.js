var http = require('http');

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

  var compiler = webpack(config);

  var webpackDev = require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  });

  webpackDev.waitUntilValid(function(){
    console.log('BLA');
  });

  this.app.use(webpackDev);
  this.app.use(require('webpack-hot-middleware')(compiler));
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
  this.server.on('listening', this.onListening.bind(this));
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

/**
 * Função executada quando o servidor estiver no ar e esperando por conexões.
 */
Servidor.prototype.onListening = function() {
  console.log('Servidor executando em: ', 'http://localhost:' + this.port);
};

module.exports = Servidor;