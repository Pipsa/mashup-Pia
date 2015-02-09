"use strict"

var server = require("./kokeile");
var router = require("./router");
// Mitenkähän MOdule Patternilla  otetaan toinen tiedosto mukaan? Kokeilen tuota samaa
var interactor = require("./booksInteractor");

interactor.setHandlers();
server.start(router.route, interactor);
