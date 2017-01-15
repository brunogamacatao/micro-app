import LiveReload from './util/livereload';
import angular from 'angular';

// Inicia o live reload (sempre que o código mudar, o browser é recarregado)
LiveReload.start();

var app = angular.module('microApp', []);

app.controller('MainCtrl', ['$scope', function($scope){
  $scope.test = 'Hello world!';
}]);