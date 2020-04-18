var flexIndex, pagesIndex, isKor;

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function isKorean(ch) {
    var numUnicode = ch.charCodeAt(0);                                                                                   
    if ( 44032 <= numUnicode && numUnicode <= 55203 ) return true;           
    return false;
}

// Initialize pagesIndex
function initflex() {
    if (!endsWith(baseurl,"/")){
        baseurl = baseurl+'/'
    };

    // First retrieve the index file
    $.getJSON(baseurl +"index.json")
        .done(function(index) {
            pagesIndex = index;
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.error("Error getting Hugo index file:", err);
        });
}

/**
 * Trigger a search in flexsearch and transform the result
 *
 * @param  {String} query
 * @return {Array}  results
 */
function search(queryTerm) {
    isKor = isKorean(queryTerm);
    if(isKor) {
        flexIndex = new FlexSearch.create({
            encode: false,
            tokenize: function(str){
                return str.replace(/[\x00-\x7F]/g, "").split("");
            },
            doc: {
                id: "uri",
                field: [
                    "title",
                    "content",
                    "description",
                    "uri"
                ]
            }
        });
     }else{
        flexIndex = new FlexSearch.create({
            doc: {
                id: "uri",
                field: [
                    "title",
                    "content",
                    "description",
                    "uri"
                ]
            }
        });
     }
     flexIndex.add(pagesIndex);
     var temp = flexIndex.search(queryTerm);
    //  debugger;
    return temp;
}

// Let's get started
initflex();
$( document ).ready(function() {
    var searchList = new autoComplete({
        /* selector for the search box element */
        selector: $("#search-by").get(0),
        /* source is the callback to perform the search */
        source: function(term, response) {
            response(search(term));
        },
        /* renderItem displays individual search results */
        renderItem: function(item, term) {
            var numContextWords = 2;
            var text = item.content.match(
                "(?:\\s?(?:[\\w]+)\\s?){0,"+numContextWords+"}" +
                    term+"(?:\\s?(?:[\\w]+)\\s?){0,"+numContextWords+"}");
            item.context = text;
            return '<div class="autocomplete-suggestion" ' +
                'data-term="' + term + '" ' +
                'data-title="' + item.title + '" ' +
                'data-uri="'+ item.uri + '" ' +
                'data-context="' + item.context + '">' +
                '» ' + item.title +
                '<div class="context">' +
                (item.context || '') +'</div>' +
                '</div>';
        },
        /* onSelect callback fires when a search suggestion is chosen */
        onSelect: function(e, term, item) {
            location.href = item.getAttribute('data-uri');
        }
    });
});
