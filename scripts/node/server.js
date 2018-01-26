var http = require('http');
var router = require('./router.js')

var server = http.createServer(function(request, response){

router.getHTML(request, response);
router.getJS(request, response);


});

server.listen(3000, '127.0.0.1', () => {
	console.log("Server 3000 is running");
})