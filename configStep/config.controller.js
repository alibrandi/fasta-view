(function() {
    angular
    .module('fastaApp')
    .controller('ConfigController', ConfigController);

    function ConfigController($scope, $rootScope){
        $scope.header = "Configuration";

        // default values
        $scope.baseSequence = "MYBASESEQUENCE";
        $scope.querySequence = "MYQUERYSEQUENCE";
        $scope.kTup = 2;
        $scope.save = save;

        ///////////////////

        function save(){
            $rootScope.model.baseSequence = $scope.baseSequence;
            $rootScope.model.querySequence = $scope.querySequence;
            $rootScope.model.kTup = $scope.kTup;
        }
    }
})();
