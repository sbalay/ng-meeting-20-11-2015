angular.module('app').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise( ($injector) => {
      $injector.get('$state').go('dashboard');
    });

    // Now set up the states
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
          main: {
            templateUrl: '../app/components/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl'
          }
        }
      })
      .state('participants', {
        url: '/participants',
        views: {
          main: {
            templateUrl: '../app/components/participants/participants.html',
            controller: 'ParticipantsController',
            controllerAs: 'participantsCtrl'
          }
        }
      })

    $locationProvider.html5Mode(true);
  }
]);
