(function(){
    angular
    .module('fastaApp')
    .service('HighlightService', HighlightService);

function HighlightService($rootScope){
    return {
        highlightPartOfParagraph: highlightPartOfParagraph,
        highlightOff: highlightOff,
    };

    function highlightPartOfParagraph(paragraphId, content, index, length){
        var prefix, suffix, highlightedPart;

        prefix = content.slice(0, index);
        highlightedPart = content.slice(index, index + length);
        suffix = content.slice(index + length);

        $('#' + paragraphId).html(prefix + '<span class="highlight">' + highlightedPart + '</span>' + suffix);
    }

    function highlightOff(paragraphId, content){
        $('#' + paragraphId).html(content);
    }
}
})();
