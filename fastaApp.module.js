angular.module('fastaApp', ['ui.router']);

(function(){
    angular
    .module('fastaApp')
    .run(run)

    function run($rootScope){
        $rootScope.model = {
            baseSequence: "GACACCATCGAATGGCGCAAAACCTTTCGCGGTA",
            querySequence: "ATGGCGCAAAACC",
            kTup: 6
        }
    }
})();
