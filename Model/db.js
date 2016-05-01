var sqlDb = require("mysql");
var settings = 
{
	host: 'localhost',
	user: 'root',
	password: 'sa123',
	database: 'iotDB'
};

exports.executeSql = function(sql, callback) {
	var conn = new sqlDb.createConnection(settings);
	conn.connect(function(err) {
		if(err) {
			console.log(err);
			callback(null, err);
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