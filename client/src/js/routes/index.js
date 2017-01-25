function setupRoutes($stateProvider, $urlRouterProvider) {
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
      url: '/pesquisador',
      templateUrl: 'pesquisador/index.html',
      abstract: true
    })
    .state('pesquisador.home', {
      url: '/home',
      templateUrl: 'pesquisador/home.html',
      controller: 'PesquisadorController',
    })
    .state('pesquisador.prontuarios', {
      url: '/prontuarios',
      templateUrl: 'pesquisador/prontuarios/index.html',
      abstract: true
    })
    .state('pesquisador.prontuarios.novo', {
      url: '/novo',
      templateUrl: 'pesquisador/prontuarios/novo.html',
      controller: 'ProntuarioNovoController',
    })
    .state('pesquisador.prontuarios.editar', {
      url: '/editar/:id',
      templateUrl: 'pesquisador/prontuarios/novo.html',
      controller: 'ProntuarioEditarController',
    })
    .state('pesquisador.prontuarios.listar', {
      url: '/',
      templateUrl: 'pesquisador/prontuarios/listar.html',
      controller: 'ProntuariosController',
    })
    .state('pesquisador.prontuarios.detalhe', {
      url: '/detalhe/:id',
      templateUrl: 'pesquisador/prontuarios/detalhe.html',
      controller: 'ProntuarioDetalheController',
    })
    .state('pesquisador.prontuarios.mae', {
      url: '/mae',
      templateUrl: 'pesquisador/prontuarios/mae.html',
      controller: 'MaeController',
    })
    .state('pesquisador.prontuarios.filhos', {
      url: '/filhos',
      abstract: true,
      templateUrl: 'pesquisador/prontuarios/index.html'
    })
    .state('pesquisador.prontuarios.filhos.listar', {
      url: '/',
      templateUrl: 'pesquisador/prontuarios/filhos/listar.html',
      controller: 'FilhosListarController'
    })
    .state('pesquisador.prontuarios.filhos.detalhe', {
      url: '/filho/:id',
      templateUrl: 'pesquisador/prontuarios/filhos/detalhe.html',
      controller: 'FilhosDetalheController'
    })
    .state('pesquisador.prontuarios.filhos.novo', {
      url: '/novo',
      templateUrl: 'pesquisador/prontuarios/filhos/novo.html',
      controller: 'FilhosNovoController'
    })
    .state('pesquisador.prontuarios.filhos.editar', {
      url: '/editar/:id',
      templateUrl: 'pesquisador/prontuarios/filhos/novo.html',
      controller: 'FilhosEditarController'
    })
    .state('pesquisador.prontuarios.filhos.exames_inespecificos', {
      url: '/exames_inespecificos/:id',
      templateUrl: 'pesquisador/prontuarios/filhos/exames_inespecificos.html',
      controller: 'FilhosExamesInespecificosController'
    })
    .state('pesquisador.prontuarios.filhos.exames_etiologicos', {
      url: '/exames_etiologicos/:id',
      templateUrl: 'pesquisador/prontuarios/filhos/exames_etiologicos.html',
      controller: 'FilhosExamesEtiologicosController'
    })
    .state('pesquisador.prontuarios.filhos.exames_imagem', {
      url: '/exames_imagem/:id',
      templateUrl: 'pesquisador/prontuarios/filhos/exames_imagem.html',
      controller: 'FilhosExamesDeImagemController'
    })
    .state('pesquisador.prontuarios.filhos.exames_outros', {
      url: '/exames_outros/:id',
      templateUrl: 'pesquisador/prontuarios/filhos/exames_outros.html',
      controller: 'FilhosExamesOutrosController'
    });

  $urlRouterProvider.otherwise('/');
}

export default setupRoutes;