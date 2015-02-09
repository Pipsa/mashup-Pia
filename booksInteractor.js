"use strict"

var http = require('http');
var storage = require("./database");
var storageHandle;
var storageName = "Books";
var books;
// var _ = require('lodash');

var port = 80;

var interactor = interactor || {};

interactor.interactor = (function () {
  var statusHtml ="<html><body>No data available</body></html>";

  var SetHandlers = function() {
    storageHandle = storage.Open();
    storage.createCollection(storageName,storageHandle);
  };

  var HandleBooks = function() {

    var booksUrl = 'http://metadata.helmet-kirjasto.fi/search/author.json?query=Campbell';
    books = getAll();
    If (books) {
      // Laita ne sievästi statementtiin kannasta
    }
    else { // Hae verkosta
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
            // laita tässä kirjalista statementtiin
          }
        };
      }
       
    });

    return  {
      SetHandlers : SetHandlers,
      HandleBooks : HandleBooks
    }
    };

exports.interactor.interactor.
