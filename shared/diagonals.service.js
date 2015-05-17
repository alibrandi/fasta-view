(function(){
    angular
    .module('fastaApp')
    .service('DiagonalsService', DiagonalsService);

    function DiagonalsService($rootScope){
        return {
            drawDiagonalsTable: drawDiagonalsTable,
            drawDiagonal: drawDiagonal,
            eraseDiagonal: eraseDiagonal,
            clearDiagonalsTable: clearDiagonalsTable,
        };

    function clearDiagonalsTable(tableId){
        $.each($('#diagonals-table [class*="diagonal"]'), function(){
            $(this).empty();
            $(this).removeAttr("title");
            $(this).removeClass(makeRemoveClassHandler(/^diagonal/));
            $(this).off('mouseenter mouseleave');
        });
    }

    function drawDiagonalsTable(tableId, diagonals) {
        for(var i=0; i<diagonals.length; ++i){
            drawDiagonal(tableId, diagonals[i]);
        }
    }

    function drawDiagonal(tableId, diagonal){
        var startPoint = diagonal.startPoint,
            endPoint = diagonal.endPoint,
            diagonalClassName = "diagonal-" + startPoint[0] + "-" + startPoint[1]; //name is necessary to group cells in one diagonal - by css class

        for(var x=startPoint[0], y=startPoint[1]; x<=endPoint[0] && y<=endPoint[1]; ++x, ++y ){
            drawDiagonalCell(tableId, x, y, diagonal.score, diagonalClassName);
        }

        $('.' + diagonalClassName).hover(function(){
            getOtherDiagonalElements($(this)).addClass("diagonal-highlight");
        }, function(){
            getOtherDiagonalElements($(this)).removeClass("diagonal-highlight");
        });
    }

    function eraseDiagonal(tableId, diagonal){
        var diagonalClassName = "diagonal-" + diagonal.startPoint[0] + "-" + diagonal.startPoint[1]; //name is necessary to group cells in one diagonal - by css class

        $.each( $('#' + tableId + ' .' + diagonalClassName), function(){
            $(this).empty();
            $(this).removeAttr("title");
            $(this).removeClass(diagonalClassName);
            $(this).off('mouseenter mouseleave');
        });
    }

    // by jQuery Element find other diagonal elements 
    function getOtherDiagonalElements(element){
        var classes = element.attr('class').split(" "); 
        for(var i=0; i<classes.length; ++i){
            if(classes[i].startsWith('diagonal-')){
                return $('.' + classes[i]);
            }
        }
    }

    function drawDiagonalCell(tableId, x, y, score, diagonalClassName){
        var cell = $('#' + tableId + ' tr:eq(' + (x+1) + ') td:eq(' + (y+1) + ')'); // tableId cells are indexed from 1, not from 0!

        cell.html("x");
        cell.attr("title", "score: " + score);
        cell.addClass(diagonalClassName);
        cell.tooltip();
    }
    }
})();
