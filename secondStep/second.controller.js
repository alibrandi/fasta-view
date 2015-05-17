(function(){
    angular
    .module('fastaApp')
    .controller('SecondController', SecondController);

function SecondController($scope, $rootScope, SecondDataService, DiagonalsService){
    $scope.header = "Step 2";
    $scope.kTup = $rootScope.model.kTup;
    $scope.baseSequence = $rootScope.model.baseSequence;
    $scope.querySequence = $rootScope.model.querySequence;
    $scope.diagonals = SecondDataService.data.diagonals;

    angular.element(document).ready(function (){
        DiagonalsService.drawDiagonalsTable('diagonals-table', $scope.diagonals);
    });
}
})();
