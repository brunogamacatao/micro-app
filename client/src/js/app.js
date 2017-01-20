import LiveReload from './util/livereload';
import angular from 'angular';
import css from '../css/style.css';

// Inicia o live reload (sempre que o código mudar, o browser é recarregado)
LiveReload.start();

const app = angular.module('microApp', []);

app.controller('MainCtrl', ['$scope', function($scope){
  $scope.test = 'Hello World !';
}]);