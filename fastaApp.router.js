(function(){
    angular
    .module('fastaApp')
    .config(router);

    function router($stateProvider, $urlRouterProvider, $locationProvider){
        $urlRouterProvider.otherwise('/home');

         $stateProvider.state('home', {
                 url: '/home',
                 templateUrl: 'home/home.html',
             })

        $stateProvider.state('configStep', {
            url: '/config',
            templateUrl: 'configStep/config-panel.html',
            controller: 'ConfigController'
        });

         $stateProvider.state('firstStep', {
                 url: '/first_step',
                 templateUrl: 'firstStep/first-panel.html',
                 controller: 'FirstController'
             });

         $stateProvider.state('secondStep', {
                 url: '/second_step',
                 templateUrl: 'secondStep/second-panel.html',
                 controller: 'SecondController'
             });

         $stateProvider.state('thirdStep', {
                 url: '/third_step',
                 templateUrl: 'thirdStep/third-panel.html',
                 controller: 'ThirdController'
             });
        // get rid of # in urls
        //     //$locationProvider.html5Mode(true);
        //     });
        //     })
        }
})();
