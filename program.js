"use strict"

var http = require('http');
// var _ = require('lodash');

var port = 80;

var statusHtml ="<html><body>No data available</body></html>";

 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(statusHtml);
}).listen(port, '127.0.0.1');
console.log('Tervehditään maailmaa. Server pyörii portissa ' + port);

var booksUrl = 'http://metadata.helmet-kirjasto.fi/search/author.json?query=Campbell';

console.log("Haetaan kirjoja...");
http.get(booksUrl, function(res) {

    var body = "";

    res.on("data", function(chunk) {
        body += chunk;
    });

    res.on("end", function() {

       // var bookList = _.map(JSON.parse(body).records, function(d) {
       //      return {
       //         displayName: d.title,
       //        year: d.year
       //     };
       // });
       //console.log("Kirjalista:", bookList);

        statusHtml = "<html><body>";
        // _.map(bookList, function(d) {
        //     statusHtml += "<h1>" + d.displayName + "</h1>";
        //    statusHtml += "<p>" + d.year + "</p>";
        // });
        var authorRes = JSON.parse(body);
        for (var i = 0; i < authorRes.records.length; i++) {
            var title = authorRes.records[i].title;
            var year = authorRes.records[i].year;

            console.log(title, ", ", year);
        };
        statusHtml += "<h1>Kirjalista löytyy konsolilta</h1></body></html>";
        //console.log(statusHtml);
    });

}).on("error", function(e) {
      console.log("Error: ", e);
});



