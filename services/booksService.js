'use strict';

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

class BooksService{

    constructor(){
    }

    getByTitle(title){

        MongoClient.connect('mongodb://localhost:27017/MacaronReader', function(err, db) {
            assert.equal(null, err);

            db.collection('books', function (err, collection) {

                collection.find({title: title}).toArray(function (err, item) {
                    return item;
                });
            });
        });
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