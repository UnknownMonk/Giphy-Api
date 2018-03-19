// api key: yM2YcYahq7dX9eRGzOQugtz0PUnR5j0j
// 'api.giphy.com'
// /v1/gifs/search
// q= rainbow
//api.giphy.com/v1/gifs/search?&q=rainbow&api_key=yM2YcYahq7dX9eRGzOQugtz0PUnR5j0j
let api = 'http://api.giphy.com/v1/gifs/search?'
let apiKey = '&api_key=yM2YcYahq7dX9eRGzOQugtz0PUnR5j0j'
let query = '&q=rainbow&'
let limit = 'limit=25&'
let offset = 'offset=30&'





function setup() {
    noCanvas();
    var url = api + apiKey + query + limit + offset;
    loadJSON(url, gotData);
    


}

function gotData(data) {

    for (var i = 0; i < data.data.length; i++) {
        createImg(data.data[i].images.original.url);
    }
};