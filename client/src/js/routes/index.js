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
      templateUrl: 'pesquisador/prontuarios/index.html',
      abstract: true
    })
    .state('pesquisador.prontuarios.novo', {
      url: '/novo',
      templateUrl: 'pesquisador/prontuarios/novo.html',
      controller: 'ProntuarioNovoController',
    })
    .state('pesquisador.prontuarios.editar', {
      url: '/editar',
      templateUrl: 'pesquisador/prontuarios/novo.html',
      controller: 'ProntuarioEditarController',
    })
    .state('pesquisador.prontuarios.listar', {
      url: '/',
      templateUrl: 'pesquisador/prontuarios/listar.html',
      controller: 'ProntuariosController',
    })
    .state('pesquisador.prontuarios.detalhe', {
      url: '/detalhe',
      templateUrl: 'pesquisador/prontuarios/detalhe.html',
      controller: 'ProntuarioController',
    })
    .state('pesquisador.prontuarios.mae', {
      url: '/mae',
      templateUrl: 'pesquisador/prontuarios/mae.html',
      controller: 'MaeController',
    })
    .state('pesquisador.prontuarios.filhos', {
      url: '/filhos',
      templateUrl: 'pesquisador/prontuarios/filhos.html',
      controller: 'FilhosController',
    })
    .state('pesquisador.prontuarios.filho', {
      url: '/filho',
      templateUrl: 'pesquisador/prontuarios/filho.html',
      controller: 'FilhoController',
    });

  $urlRouterProvider.otherwise('/');
}

export default setupRoutes;