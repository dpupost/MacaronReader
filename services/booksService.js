'use strict';

var MongoClient = require('thunkify-mongodb').MongoClient;
var mongodb = require('mongodb');
var assert = require('assert');

class BooksService{

    constructor(){
    }

    *getByTitle(title){
        var mongoClient = new MongoClient(new mongodb.MongoClient());
        var db = yield mongoClient.connect('mongodb://localhost:27017/MacaronReader');
        var collection = yield db.collection('books');
        var book = yield collection.find({title: title}).toArray();

        yield db.close();

        return book;
    }

    getById(id){

        MongoClient.connect('mongodb://localhost:27017/macaronReader', function(err, db) {
            assert.equal(null, err);
            assert.equal(1, result);

            var query = {'_id': id};

            db.collection('books', function (err, collection) {

                collection.findOne(query, function (err, item) {
                    console.log(err);
                    res.send(item);
                });
            });
        });
    }
}

module.exports = BooksService;