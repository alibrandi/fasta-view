(function(){
    angular
    .module('fastaApp')
    .controller('ThirdController', ThirdController);

function ThirdController($scope, $rootScope, ThirdDataService, DiagonalsService){
    $scope.header = "Step 3";
    $scope.kTup = $rootScope.model.kTup;
    $scope.baseSequence = $rootScope.model.baseSequence;
    $scope.querySequence = $rootScope.model.querySequence;
    $scope.diagonals = ThirdDataService.data.diagonals;
    $scope.drawDiagonalsTable = DiagonalsService.drawDiagonalsTable;
    $scope.substitutionMat = "BLOSSUM";

    angular.element(document).ready(function (){
        DiagonalsService.drawDiagonalsTable('diagonals-table', $scope.diagonals);
    });
}
})();
