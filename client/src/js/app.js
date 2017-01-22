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

// Inicia o live reload (sempre que o código mudar, o browser é recarregado)
LiveReload.start();

const app = angular.module('ipesq', 
  ['ui.router', 'ngMaterial', 'ngSanitize', 'nvd3', 
  'ipesq.components', 'ipesq.controllers', 'ipesq.directives']);

// Configuração das rotas
app.config(
  ['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$mdIconProvider',
    function($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {

      $stateProvider
        .state('index', {
          url: '',
          templateUrl: 'home.html'
        })
        .state('admin', {
          url: '/admin',
          templateUrl: 'admin/index.html',
          controller: 'DashboardController',
          abstract: true
        })
        .state('admin.dashboard', {
          url: '/dashboard',
          templateUrl: 'admin/dashboard.html',
          data: {
            title: 'Dashboard'
          }
        })
        .state('pesquisador', {
          url: '/',
          templateUrl: 'pesquisador/index.html'
        });

      $urlRouterProvider.otherwise('/');

      $mdThemingProvider
        .theme('default')
          .primaryPalette('grey', {
            'default': '600'
          })
          .accentPalette('teal', {
            'default': '500'
          })
          .warnPalette('defaultPrimary');

      $mdThemingProvider.theme('dark', 'default')
        .primaryPalette('defaultPrimary')
        .dark();

      $mdThemingProvider.theme('grey', 'default')
        .primaryPalette('grey');

      $mdThemingProvider.theme('custom', 'default')
        .primaryPalette('defaultPrimary', {
          'hue-1': '50'
      });

      $mdThemingProvider.definePalette('defaultPrimary', {
        '50':  '#FFFFFF',
        '100': 'rgb(255, 198, 197)',
        '200': '#E75753',
        '300': '#E75753',
        '400': '#E75753',
        '500': '#E75753',
        '600': '#E75753',
        '700': '#E75753',
        '800': '#E75753',
        '900': '#E75753',
        'A100': '#E75753',
        'A200': '#E75753',
        'A400': '#E75753',
        'A700': '#E75753'
      });

      $mdIconProvider.icon('user', 'img/user.svg', 64);
    }
  ]
);