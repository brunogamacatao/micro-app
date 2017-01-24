// Importa o angular
import angular from 'angular';

// Importa plugins do angular
import 'angular-ui-router';
import 'angular-messages';
import 'angular-material';
import 'angular-sanitize';
import 'angular-nvd3';

// Importa o livereload
import LiveReload from './util/livereload';

// Importa as folhas de estilo
import 'angular-material/angular-material.css';
import '../css/style.css';

// Importa os componentes
import './components';
import './controllers';
import './directives';
import setupRoutes from './routes';
import setupThemes from './util/themes';

// Inicia o live reload (sempre que o código mudar, o browser é recarregado)
LiveReload.start();

const app = angular.module('ipesq', 
  ['ui.router', 'ngMaterial', 'ngSanitize', 'nvd3', 
  'ipesq.components', 'ipesq.controllers', 'ipesq.directives']);

// Configuração das rotas
app.config(
  ['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$mdIconProvider',
    function($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {
      setupRoutes($stateProvider, $urlRouterProvider);
      setupThemes($mdThemingProvider);
    }
  ]
);