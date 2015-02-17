"use strict"
//var jQuery = require('https://code.jquery.com/jquery-1.10.2.js');
 

var listEl = document.getElementById('jogs');
var jogs = [];

function createListItem(jog) {

 	var li = document.createElement('li');

 	li.innerHTML = jog.date + '    ' + jog.length + ' km    ' + jog.weather;

 	listEl.appendChild(li);

}

//$.get('/jogs', function(jogs) {

//    jogs.forEach(createListItem);

//});

//  jquery.post("http://localhost:9000/jogs",jogs);
 // console.log("eka severkutsu tehty");
// jQuery.post("http://localhost:9000/jogs", function(jogs) {

// 	jogs.forEach(createListItem);

//}); 

// Serveriltä datan haku ei onnistu. Koitan visualisointia.
jogs = [
{
_id: "54e307dc7b2e3fe01a3affea",
date: "13.2.2015",
length: "5,7",
weather: "frost"
},
{
_id: "54e30dc20f3927ac24a7211c",
date: "12.2.2015",
length: "9,5",
weather: "very frost"
},
{
_id: "54e3243127a1017c24afdfde",
date: "11.2.2015",
length: "7,2",
weather: "cold"
},
{
_id: "54e32b2fa3d019142593e288",
date: "10.2.2015",
length: "1,3",
weather: "cool"
},
{
_id: "54e33081a3d019142593e289",
date: "9.2.2015",
length: "7,5",
weather: "warm"
},
{
_id: "54e33096a3d019142593e28a",
date: "10.2.2015",
length: "7,3",
weather: "cold"
},
{
_id: "54e330b7a3d019142593e28b",
date: "11.2.2015",
length: "7,4",
weather: "warm"
},
{
_id: "54e330c9a3d019142593e28c",
date: "9.2.2015",
length: "7,1",
weather: "warm"
},
{
_id: "54e330dca3d019142593e28d",
date: "7.2.2015",
length: "4,0",
weather: "hot"
},
{
_id: "54e332dca3d019142593e28e",
date: "6.2.2015",
length: "2,5",
weather: "warm"
},
{
_id: "54e33b74ee0103ec2a73a357",
date: "5.2.2015",
length: "7,3",
weather: "very frost"
}];

jogs.forEach(createListItem);

