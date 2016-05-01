var sqlDb = require("mysql");
var settings = 
{
	host: 'http://ec2-52-90-14-74.compute-1.amazonaws.com',
	user: 'root',
	password: 'parkwiz',
	database: 'iotDB'
};

exports.executeSql = function(sql, callback) {
	var conn = new sqlDb.createConnection(settings);
	conn.connect(function(err) {
		if(err) {
			console.log(err);
			return;
		}

		conn.query(sql, function(err, data) {

			if(err) {
				console.log(err);
				callback(null, err);
			}
			else {
				callback(data, null);
			}

			conn.end();
		});
	});
}
