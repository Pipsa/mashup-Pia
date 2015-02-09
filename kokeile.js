var http = require("http");
var url = require("url");

function start(route, interactor) {

	function onRequest(request, response) {
    var statement = "<html<body><p>No data available</p></body></htm>l>";
		var pathname = url.parse(request.url).pathname;
    	console.log("Request  for " + pathname + " received.");

    	route(pathname);
      // Pitäisiköhän tämä olla tuon routen sisällä?
      if (pathname == "/api/query/books") {
        statement = interactor.HandleBooks();
      }
    	
    	response.writeHead(200, {"Content-Type": "text/plain"});
    	response.write(statement);
   		response.end();
   }

  // aikaisempaa kokeilua: 
  // Retrieve
  // var MongoClient = require('mongodb').MongoClient;

  // Connect to the db
  // MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  //   if(!err) {
  //    console.log("We are connected");
  //   }
  //});

    http.createServer(onRequest).listen(8888);

    console.log("Server has started.");
}

exports.start = start;