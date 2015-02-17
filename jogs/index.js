"use strict"

var express = require('express');

var app = express(); // Luodaan uusi express-applikaatio

var bodyParser = require('body-parser');

app.use(bodyParser.json());

// client -osiosta lisättiin sama
var serveStatic = require('serve-static');

app.use(serveStatic('client/', {'index': ['index.html']}));


// Hands - on sama
var MongoClient = require('mongodb').MongoClient;

// var movies = [{ // Väliaikainen tietokanta elokuville

// title: 'Robocop',

 //year: 1987

//}, {

// title: 'Predator',

 //year: 1987

//}];

// Endpoint kaikkien elokuvien hakemiseen

// alkuperäinen get otetaan pois
// app.get('/movies', function(req, res) {

 // res.send(movies);
app.get('/jogs', function(req, res, next) {

	app.jogs.find().toArray(function(err, results) {

		if(err) {

			 next(err);

			return;

		 }

		 res.send(results);

	});

});
//});


// Endpoint elokuvien tallentamiseen - tämä oli eka versio

// app.post('/movies', function(req, res) {

//	var newMovie = req.body;

//	movies.push(newMovie)

//	res.status(201).send(newMovie);

//});

app.post('/jogs', function(req, res, next) {

	var newJog = req.body;
	var weatherArray = ["hot","warm","cool","cold", "frost", "very frost"];

	newJog.weather = randomListItem(weatherArray);
	function randomListItem (myArray) { return myArray[Math.floor( Math.random() * myArray.length )]; }

	app.jogs.insert(newJog, function(err, newJogs) {

		 if(err) {
		 	console.log("Jog insert err =" + err);

			 next(err);

			return;

		}

		res.status(201).send(newJogs);

	});

});

// Hands on sama kuin alla
MongoClient.connect('mongodb://127.0.0.1:27017/jogdb', function(err, db) {

	if(err) {
		 console.log("Tietokanta yhteys ei toiminut. Err = " + err);
		 throw err;

	 }

	app.jogs = db.collection('jogs');


	// Asetetaan applikaatio kuuntelemana porttia 9000 ja

	// tulostetaan viesti kun se on valmis vastaanottamaan kyselyitä

	app.listen(9000, function() {

	console.log('Jogs API listening port 9000');

	});

});

// Asetetaan applikaatio kuuntelemana porttia 9000 ja

// tulostetaan viesti kun se on valmis vastaanottamaan kyselyitä

// app.listen(9000, function() {

// console.log('Movie API listening port 9000');

//});