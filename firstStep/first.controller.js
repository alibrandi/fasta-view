(function(){
    angular
    .module('fastaApp')
    .controller('FirstController', FirstController);

function FirstController($scope, $rootScope, FirstDataService, HighlightService){
    var model = $rootScope.model;

    $scope.header = "Step 1";
    $scope.kTup = model.kTup;
    $scope.baseSequence = model.baseSequence;
    $scope.querySequence = model.querySequence;
    $scope.data = FirstDataService.data;

    $scope.highlightPartOfParagraph = HighlightService.highlightPartOfParagraph;
    $scope.highlightOff = HighlightService.highlightOff;
}
})();
