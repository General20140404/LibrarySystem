var MONGO_PORT = "27017",
    MONGO_DATABASE = "test",
    MONGO_COLLECTION = "test";

var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');

// Set up the connection to the local db
var mongoclient = new MongoClient(new Server("localhost", MONGO_PORT), {native_parser: true});

// Open the connection to the server
mongoclient.open(function(err, mongoclient) {

  var db = mongoclient.db(MONGO_DATABASE);
  var collection = db.collection(MONGO_COLLECTION);

  collection.find().toArray(function(err, docs){

    for(var i = 0,len = docs.length;i<len;i++){
      console.log(docs[i]);
    }

    db.close();

  });


  
});