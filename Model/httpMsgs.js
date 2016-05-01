

exports.send200 = function(req, resp){
	resp.writeHead(200, {"Content-Type": "application/json"});
	resp.end();
};



exports.show404 = function(req, resp, err){
	//if(settings.httpMsgsFormat === "HTML"){
		//resp
		resp.writeHead(404, {"Content-Type": "application/json"});
		resp.end();
	//}
};

exports.show500 = function(req, resp, err){
	//if(settings.httpMsgsFormat === "HTML"){
		//resp
		resp.writeHead(500, {"Content-Type": "application/json"});
		resp.end();
	//}
};