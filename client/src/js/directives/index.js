import angular from 'angular';

// Cria o módulo
const directives = angular.module('ipesq.directives', []);

directives.directive('messagesSection', [function() {
  return {
    restrict: 'E',
    scope: {
      title: '@',
      theme: '@',
      messages: '='
    },
    template: '' +
              '<section>' +
              '  <md-subheader ng-class="theme">{{title}}</md-subheader>' +
              '  <md-list>' +
              '    <md-list-item class="md-3-line" ng-repeat="message in messages">' +
              '    <img class="md-avatar" ng-src="img/einstein.jpg">' +
              '    <div class="md-list-item-text">' +
              '      <h3>{{message.subject}}</h3>' +
              '      <h4>{{message.userName}}</h4>' +
              '      <p>{{message.text}}</p>' +
              '    </div>' +
              '    </md-list-item>' +
              '  </md-list>' +
              '</section>',
    link : function(scope, element, attrs) {
    }
  };
}]);

directives.directive('panelWidget', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: { title: '@', template: '@', options: '@' },
    template: '' +
              '<section layout-margin class="md-whiteframe-z1 panel-widget">' +
              '  <md-toolbar md-theme="custom" class="md-hue-1 panel-widget-toolbar">' +
              '    <div class="md-toolbar-tools">' +
              '      <h3 class="panel-widget-tittle">{{title}}</h3>' +
              '      <span flex></span>' +
              '      <md-button ng-show="options" ng-click="$showOptions = !$showOptions" class="md-icon-button" aria-label="Show options">' +
              '        <i class="material-icons">more_vert</i>' +
              '      </md-button>' +
              '    </div>' +
              '  </md-toolbar>' +
              '  <div ng-include="template"/>' +
              '</section>',
    compile: function(element, attrs, linker) {
      return function(scope, element) {
        linker(scope, function(clone) {
          element.append(clone);
        });
      };
    }
  };
});

export default directives;