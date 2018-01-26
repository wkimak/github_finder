
var url = require('url');
var fs = require('fs');
//var async = require('async');


function getHTML(request, response){

if(request.url === "/"){
response.writeHead(200, {'Content-Type': 'text/html'});
var readHTML = fs.readFileSync('../../index.html', {encoding: 'utf8'});
response.end(readHTML);

}
}


function getJS(request, response){
if(request.url === "/scripts/github.js"){
	response.writeHead(200,{"Content-Type": "text/javascript"});
	var readJS = fs.readFileSync('../github.js', {encoding: 'utf8'});
	response.end(readJS);
} else if(request.url === "/scripts/ui.js"){
	response.writeHead(200,{"Content-Type": "text/javascript"});
	var readJS = fs.readFileSync('../ui.js', {encoding: 'utf8'});
	response.end(readJS);
} else if(request.url === "/scripts/app.js"){
	response.writeHead(200,{"Content-Type": "text/javascript"});
	var readJS = fs.readFileSync('../app.js', {encoding: 'utf8'});
	response.end(readJS);
}

}


module.exports.getHTML = getHTML;
module.exports.getJS = getJS;