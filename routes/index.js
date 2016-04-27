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