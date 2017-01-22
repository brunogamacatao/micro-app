import angular from 'angular';

// Cria o módulo
const controllers = angular.module('ipesq.controllers', []);

// Cria os controladores
controllers.controller('DashboardController', ['$scope', '$mdSidenav', '$mdBottomSheet', '$q', function($scope, $mdSidenav, $mdBottomSheet, $q) {
  $scope.menuItems = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      sref: '.dashboard'
    },
    {
      name: 'Profile',
      icon: 'person',
      sref: '.profile'
    },
    {
      name: 'Table',
      icon: 'view_module',
      sref: '.table'
    }
  ];

  $scope.messages = [
    {
      userPhoto : '/assets/images/user.svg',
      subject: 'Electromagnetic radiation',
      userName: 'Wilhelm Conrad Röntgen',
      date: '1901',
      text: 'In recognition of the extraordinary services he has rendered by the discovery of the remarkable rays subsequently named after him'
    },
    {
      userPhoto : '/assets/images/user.svg',
      subject: 'Quantum theory',
      userName: 'Max Planck',
      date: '1918',
      text: 'For the services he rendered to the advancement of physics by his discovery of energy quanta.'
    },
    {
      userPhoto : '/assets/images/user.svg',
      subject: 'Photoelectric effect',
      userName: 'Albert Einstein',
      date: '1921',
      text: 'For his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect'
    },
    {
      userPhoto : '/assets/images/user.svg',
      subject: 'Atomic structure',
      userName: 'Niels Bohr',
      date: '1922',
      text: 'For his services in the investigation of the structure of atoms and of the radiation emanating from them'
    },
    {
      userPhoto : '/assets/images/user.svg',
      subject: 'Wave equation',
      userName: 'Erwin Schrödinger',
      date: '1933',
      text: 'For the discovery of new productive forms of atomic theory'
    },
    {
      userPhoto : '/assets/images/user.svg',
      subject: 'Spin theory',
      userName: 'Wolfgang Pauli',
      date: '1945',
      text: 'For the discovery of the Exclusion Principle, also called the Pauli principle'
    }
  ];  

  $scope.selectItem = function(item) {

  };

  $scope.showActions = function(event) {

  };

  $scope.toggleItemsList = function() {
    var pending = $mdBottomSheet.hide() || $q.when(true);

    pending.then(function(){
      $mdSidenav('left').toggle();
    });
  };

  $scope.toggleRightSidebar = function() {
    $mdSidenav('right').toggle();
  };  
}]);

controllers.controller('VisitorsController', ['$scope', function($scope) {
  $scope.visitorsChartData = [ {key: 'Mobile', y: 5264}, { key: 'Desktop', y: 3872} ];

  $scope.chartOptions = {
      chart: {
          type: 'pieChart',
          height: 210,
          donut: true,
          x: function (d) { return d.key; },
          y: function (d) { return d.y; },
          valueFormat: (d3.format(".0f")),
          color: ['rgb(0, 150, 136)', '#E75753'],
          showLabels: false,
          showLegend: false,
          title: 'Over 9K',
          margin: { top: -10 }
      }
  };
}]);

controllers.controller('WarningsController', ['$scope', function($scope) {
  $scope.warningsChartData = function() {
    var sin = [];
    for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: Math.abs(Math.cos(i/10) *0.25*i + 0.9 - 0.4*i)});
    }
    return [ { values: sin, color: 'rgb(0, 150, 136)', area: true } ];
  }

  $scope.chartOptions = {
    chart: {
      type: 'lineChart',
      height: 210,
      margin: { top: -10, left: -20, right: -20 },
      x: function (d) { return d.x },
      y: function (d) { return d.y },
      showLabels: false,
      showLegend: false,
      title: 'Over 9K',
      showYAxis: false,
      showXAxis: false,
      tooltip: { contentGenerator: function (d) { return '<span class="custom-tooltip">' + Math.round(d.point.y) + '</span>' } }
    }
  };
}]);

controllers.controller('MemoryController', ['$scope', function($scope) {
  $scope.memoryChartData = [ {key: 'memory', y: 42}, { key: 'free', y: 58} ];

  $scope.chartOptions = {
    chart: {
      type: 'pieChart',
      height: 210,
      donut: true,
      pie: {
        startAngle: function (d) { return d.startAngle/2 -Math.PI/2 },
        endAngle: function (d) { return d.endAngle/2 -Math.PI/2 }
      },
      x: function (d) { return d.key; },
      y: function (d) { return d.y; },
      valueFormat: (d3.format(".0f")),
      color: ['rgb(0, 150, 136)', 'rgb(191, 191, 191)'],
      showLabels: false,
      showLegend: false,
      tooltips: false,
      title: '42%',
      titleOffset: -10,
      margin: { bottom: -80, left: -20, right: -20 }
    }
  };
}]);