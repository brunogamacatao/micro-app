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

controllers.controller('PesquisadorToolbarController', ['$scope', '$state', '$window', function($scope, $state, $window) {
  $scope.voltar = function() {
    $window.history.back();
  };

  $scope.sair = function() {
    $state.go('index');
  };
}]);

controllers.controller('PesquisadorController', ['$scope', '$state', function($scope, $state) {
  $scope.novoProntuario = function() {
    $state.go('pesquisador.prontuarios.novo');
  };

  $scope.pesquisarProntuarios = function() {
    $state.go('pesquisador.prontuarios.listar');
  };
}]);

controllers.controller('ProntuariosController', ['$scope', '$state', function($scope, $state) {
  $scope.tableData = [
    {
      id: 'PBCG0001',
      mae: 'Maria da Silva',
      filhos: 2
    },
    {
      id: 'PBCG0002',
      mae: 'Neide Oliveira',
      filhos: 1
    },
    {
      id: 'PBCG0003',
      mae: 'Sílvia Braz',
      filhos: 3
    },
    {
      id: 'PBJP0001',
      mae: 'Luíza Santos',
      filhos: 1
    },
    {
      id: 'PBCZ0001',
      mae: 'Helena Barbosa',
      filhos: 1
    },
    {
      id: 'PBCG0004',
      mae: 'Maria do Patrocínio',
      filhos: 1
    },
    {
      id: 'PBCG0005',
      mae: 'Ofélia Cavalcanti',
      filhos: 2
    },
    {
      id: 'PBCG0006',
      mae: 'Marina Aparecida',
      filhos: 1
    },
    {
      id: 'PBCG0007',
      mae: 'Ana Gouveia',
      filhos: 3
    },
    {
      id: 'PBCG0008',
      mae: 'Emanuela da Silva',
      filhos: 1
    }
  ];

  $scope.visualizar = function() {
    $state.go('pesquisador.prontuarios.detalhe');
  };
}]);

controllers.controller('ProntuarioController', ['$scope', '$state', '$mdDialog', function($scope, $state, $mdDialog) {
  $scope.editar = function() {
    $state.go('pesquisador.prontuarios.editar');
  };

  $scope.fechamento = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Fechamento do Caso')
          .textContent('Tem certeza que deseja fechar esse caso ?')
          .targetEvent(ev)
          .ok('Sim')
          .cancel('Não');

    $mdDialog.show(confirm).then(function() {
      $state.go('pesquisador.home');
    }, function() {
      $scope.status = 'You decided to keep your debt.';
    });
  };

  $scope.dadosDaMae = function() {
    $state.go('pesquisador.prontuarios.mae');
  };

  $scope.dadosDosFilhos = function() {
    $state.go('pesquisador.prontuarios.filhos');
  };
}]);

controllers.controller('MaeController', ['$scope', '$state', function($scope, $state) {

}]);

controllers.controller('FilhosController', ['$scope', '$state', function($scope, $state) {
  $scope.tableData = [
    {
      nome: 'Sandro Cavanlcanti',
      idade: '6 meses',
      ultimoAcomp: '15/01/2017'
    }
  ];

  $scope.visualizar = function() {
    $state.go('pesquisador.prontuarios.filho');
  };  
}]);

controllers.controller('FilhoController', ['$scope', '$state', function($scope, $state) {

}]);

controllers.controller('ProntuarioNovoController', ['$scope', '$state', function($scope, $state) {
  $scope.labelBotaoSalvar = 'Cadastrar';

  $scope.cadastrar = function() {
    $state.go('pesquisador.prontuarios.detalhe');
  };
}]);

controllers.controller('ProntuarioEditarController', ['$scope', '$state', function($scope, $state) {
  $scope.labelBotaoSalvar = 'Atualizar';
  $scope.model = {
    servicoDeSaude: {
      tipo: 'hospital_publico',
      nome: 'ISEA',
      municipio: 'Campina Grande'
    },
    mae: {
      nome: 'Ofélia Cavalcanti',
      dataDeNascimento: new Date('1984-09-25'),
      raca: 'parda',
      escolaridade: 'medio',
      estadoCivil: 'casada',
      ocupacao: 'Professora',
      numeroDePessoasNaCasa: 4,
      rendaFamiliar: 2500
    },
    endereco: {
      estado: 'pb',
      municipio: '1',
      logradouro: 'Rua Antônio Vieira da Rocha',
      numero: '624',
      bairro: 'Bodocongó',
      telefone: '(83) 3333-2008'
    }
  };

  $scope.cadastrar = function() {
    $state.go('pesquisador.prontuarios.detalhe');
  };
}]);
