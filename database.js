"use strict"

var storage = storage || {};

storage.storage = function () {
	var status = 0;
	var MongoClient = require('mongodb').MongoClient;

	var open = function() {
		// Connect to the db
		MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  			if(!err) {
   				 console.log("We are connected");
  				}
		});	
		return (err);
	};

	var createCollection = function (collectionName, db) {
		// creates the collection, if it does not exist yet
 		db.createCollection(collectionName, function(err, collection) {});
 		return (collection);
	};


	var import = function (var source) {
		// No functionality yet
		console.log("storage.import()");
		status = 1;
		return (status);
	};

	var add = function (collectionName, db, var info) {
		var collection = db.collection(collectionName);

		collection.insert(info, {w:1}, function(err,result) {});
		console.log("storage.add(), err = " + err);
		return (err);
	};

	
	var getAll (collectionName, db) {
		var collection = db.collection(collectionName);
		// This loads all the documents into memory first - if huge amount of data, fetch it using the cursor
		collection.find().toArray(function(err,items) {});

		console.log("storage.getAll(), err = " + err);
		return (items);
	};

	var getSpecific (collectionName, db, var key) {
		var collection = db.collection(collectionName);

		var stream = collection.find({key : {$ne: 2}}).stream();
		stream.on("data", function(item) {});
		stream.on("end", function () {});

		console.log("storage.getSpecific()");

		return (stream);
	};

 	return {
 		open : open,
 		createCollection : createCollection,
 		import : import,
 		add : add,
 		getAll : getAll,
 		getSpecific : getSpecific
 	};
};
