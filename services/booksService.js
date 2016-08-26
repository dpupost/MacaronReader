'use strict';

const MongoClient = require('thunkify-mongodb').MongoClient;
const mongodb = require('mongodb');
const assert = require('assert');


class BooksService{

    constructor(){
    }

    *getByTitle(title){
        assert.notEqual(title, null);
        let mongoClient = new MongoClient(new mongodb.MongoClient());
        let db = yield mongoClient.connect('mongodb://localhost:27017/MacaronReader');
        let collection = yield db.collection('books');
        let book = yield collection.find({title: title}).toArray();

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