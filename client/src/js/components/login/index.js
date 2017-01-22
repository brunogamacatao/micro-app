import './style.css';

const installComponent = function(app) {
  app.component('login', {
    templateUrl: 'login/index.html',
    controller: ['$scope', '$state', function($scope, $state) {
      $scope.user = {};

      $scope.login = function() {
        if ($scope.user.login === 'admin') {
          $state.go('admin.dashboard');
        } else {
          $state.go('pesquisador');
        }
      };
    }]
  });
};

module.exports = installComponent;