var util = require('util');

var db = require('./mongo').db;

db.open(function(err, db) {
	db.collection('web', function(err, collection) {
		var cursor = collection.find({
			name: 'Noah'
		});
		console.log('>>>>>>>>>>>>>>> cursor');
		cursor.nextObject(function(err, doc) {
			doc = util.format('%j', doc);
			console.log(doc);
			db.close();
		});
	});
});