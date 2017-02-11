var assert = require('assert');
var request = require('supertest');

var Aplicacao = require('../../server/aplicacao');
var BancoDeDados = require('../../server/banco_de_dados');


describe('loading express', function () {
  var app;
  var started = false;

  function waitForServerStartup(callback) {
    if (!started) {
      new BancoDeDados(function() {
        app = new Aplicacao().app;
        started = true;

        callback();
      });
    } else {
      callback();
    }
  }

  it('responds to /', function(done) {
    waitForServerStartup(function() {
      request(app)
        .get('/')
        .expect(200, done);      
    });
  });

  it('responds to /posts', function(done) {
    waitForServerStartup(function() {
      request(app)
        .get('/posts')
        .expect(200, done);
    });
  });

  it('responds to /users', function(done) {
    waitForServerStartup(function() {
      request(app)
        .get('/users')
        .expect(200, done);
    });
  });
});