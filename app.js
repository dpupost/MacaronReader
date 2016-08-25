'use strict';

var express = require('express');
var BooksService = require("./services/booksService")
var app = express();

app.get('/', function (req, res) {

    var booksService = new BooksService();
    var book = booksService.getByTitle('testTitle');

    res.send('Book title: ' + book.next().value);
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});