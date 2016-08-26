'use strict';

const express = require('express');
const BooksService = require("./services/booksService")
const co = require('co');
const app = express();

app.get('/', function (req, res) {

    let booksService = new BooksService();
    let book = co(booksService.getByTitle('testTitle'));
    book.then(function (value) {
        res.send('Book title: ' + value[0].title);
    }, function (err) {
        console.error(err.stack);
    });

});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});