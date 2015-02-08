"use strict"

var weatherKm = weatherKm || {};

weatherKm.interactor = (function () {
	var weatherKmInfo;
	var status = 0;

	var getWeatherKm = function() {
		console.log("interactor.getWeatherKm()");
		weatherKmInfo = [
			{ 'weather' : 'sunny', 'jog' : 814},
			{ 'weather' : 'rainy', 'jog' : 203},
			{ 'weather' : 'cloudy', 'jog' : 1018}
		];
		return weatherKmInfo;
	};

	var addJog = function(jogInfo) {
		console.log("interactor.addJog()");		
		return status;
	};

	return {
		getWeatherKm : getWeatherKm,
		addJog : addJog
	};

};