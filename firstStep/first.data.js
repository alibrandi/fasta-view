(function(){
    angular
    .module('fastaApp')
    .service('FirstDataService', FirstDataService); 

function FirstDataService($rootScope){
    this.data = {
        baseSequence: {
                          'GACACC' : [1,2],
'ACACCA' : [13],
'CACCAT' : [5,7,4],
'ACCATC' : [10,6],
'GAATGG' : [0,16],
'AATGGC' : [18],
'CCTTTC' : [22,17,14],
'CGCGGT' : [26,28]
                      },
querySequence: {
                   'GACACC' : [1,2],
'ACACCA' : [13],
'CACCAT' : [5,7,4],
'ACCATC' : [10,6],
'GAATGG' : [0,16],
'AATGGC' : [18],
'CCTTTC' : [22,17,14],
'CGCGGT' : [26,28]
               },
hotSpots: {
              'GACACC' : [],
              'ACACCA' : [1],
              'CACCAT' : [-5,7,4],
              'ACCATC' : [10,-6],
              'GAATGG' : [],
              'AATGGC' : [18],
              'CGCGGT' : [26,28]
          }, 
    }
}
})();
