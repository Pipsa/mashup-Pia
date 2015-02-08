"use strict"

var storage = storage || {};

storage.storage = function () {
	var status = 0;


	var import = function (var source) {
		// No functionality yet
		console.log("storage.import()");
		status = 1;
		return (status);
	};

	var add = function (var info)
	// No functionality yet
		console.log("storage.add()");
		status = 1;
		return (status);
	};

	var get (var key) {
		// No functionality yet
		console.log("storage.get()");
		status = 1;
		return (info);
	};

 	return {
 		import : import,
 		add : add,
 		get : get
 	};
};
