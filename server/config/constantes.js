const constantes = {
  DATABASE_URL_DEV: 'mongodb://localhost/microapp',
  DATABASE_URL_PROD: 'mongodb://heroku_g8h2pt53:vg37cvp3pdodef206fv59fef94@ds149059.mlab.com:49059/heroku_g8h2pt53',
  VIEW_ENGINE: 'ejs',
  VIEWS_PATH: '../client/dist',
  STATICS_PATH: '../client/dist',
  STATICS_SRC_PATH: '../client/src',
  TEMPLATES_PATH: '../client/templates',
  ASSETS_PATH: '../client/assets'
};

// Escolhe automaticamente a conexão com o banco de dados de acordo com o 
// ambiente de execução (produção ou desenvolvimento)
if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
  constantes.DATABASE_URL = constantes.DATABASE_URL_PROD;
} else {
  constantes.DATABASE_URL = constantes.DATABASE_URL_DEV;
}

module.exports = constantes;