"use strict";
// http://www.imdb.com/title/tt1628033/
module.exports = function (arr) {
    let urls = [];
    arr.forEach(x => urls.push(`http://www.imdb.com/title/${x.imdbId}`));
    return urls;
};