var mongo = require('mongodb');
var Db = mongo.Db,
	Connection = mongo.Connection,
	Server = mongo.Server,
	BSON = mongo.BSONNative;

var Config = require('./config/config');


// You may specify an alternate path for \data\db with the dbpath setting for mongod.exe, as in the following
// example:
// 	C:\mongodb\bin\mongod.exe --dbpath d:\test\mongodb\data
// If your path includes spaces, enclose the entire path in double quotations, for example:
// 	C:\mongodb\bin\mongod.exe --dbpath "d:\test\mongo db data"

var db = new Db(Config.dbConfig.serverName, new Server(Config.serverConfig.hostname, Config.serverConfig.port, {}), {
	native_parser: false
});

exports.db = db;