/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title : 'Valley Designer'
	});
};

exports.bigdata = function(req, res) {
	res.render('bigdata', {
		title : 'Valley Designer'
	});
};

exports.iot = function(req, res) {
	res.render('iot', {
		title : 'Valley Designer'
	});
};

exports.mobile = function(req, res) {
	res.render('mobile', {
		title : 'Valley Designer'
	});
};

exports.management = function(req, res) {
	res.render('management', {
		title : 'Valley Designer'
	});
};

exports.location = function(req, res) {
	res.render('location', {
		title : 'Valley Designer'
	});
};

exports.contactus = function(req, res) {
	res.render('contact', {
		title : 'Valley Designer'
	});
};

exports.codeofconduct = function(req, res) {
	res.render('codeofconduct', {
		title : 'Valley Designer'
	});
};

exports.businessprocess = function(req, res) {
	res.render('businessprocess', {
		title : 'Valley Designer'
	});
};
exports.blog = function(req, res) {
	res.render('blog', {
		title : 'Valley Designer'
	});
};


var db = require("../Model/db");
var httpMsgs = require("../Model/httpMsgs");
var util = require("util");

//POST
exports.addEntry = function(req, resp, reqBody){
	try{
		if(!reqBody)
			throw new Error("Input not valid");
		debugger;
		if(typeof(reqBody) == "string"){
		var data = JSON.parse(reqBody);
	}
	else{
		data = reqBody;
	}
		if(data){
			var sql = "INSERT INTO iotDB.user(FirstName, LastName , Email) VALUES";
			sql += util.format("('%s', '%s', '%s');", data.fname, data.lname, data.email);
			
			db.executeSql(sql, function(data, err) {
				debugger;
				if(err) {
					httpMsgs.show500(req, resp);
				}
				else {
					httpMsgs.send200(req, resp);
				}
			})
		}
		else {
			throw new Error("Input not valid");
		}
	}
	catch(ex){
		debugger;
		httpMsgs.show500(req, resp, ex);
	}

};
