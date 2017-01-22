import angular from 'angular';
import ngRoute from 'angular-route';

// Cria o módulo
const components = angular.module('ipesq.components', ['ngRoute', 'ngMessages']);

// Instala os componentes no módulo
require('./login')(components);

export default components;