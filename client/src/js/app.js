import angular from 'angular';
import ngRoute from 'angular-route';
import ngMaterial from 'angular-material';
import LiveReload from './util/livereload';

// Importa as folhas de estilo
require('../css/style.css');
require('angular-material/angular-material.css');

// Inicia o live reload (sempre que o código mudar, o browser é recarregado)
LiveReload.start();

const app = angular.module('ipesq', ['ngRoute', 'ngMaterial']);

// Configuração das rotas
app.config(
  ['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'home.html'
        })
        .otherwise({
          templateUrl: 'error.html'
        });
    }
  ]
);
