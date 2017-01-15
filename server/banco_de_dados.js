var mongoose = require('mongoose');
var constantes = require('./config/constantes');

var BancoDeDados = function(callback) {
  mongoose.connect(constantes.DATABASE_URL);

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    this.registraModelos();
    callback();
  }.bind(this));
};

BancoDeDados.prototype.registraModelos = function() {
  require('./models/Post');
  require('./models/Comment');
};

module.exports = BancoDeDados;