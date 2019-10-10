// build.js
var pageMapHelper = require('./');

var chapters = [1, 2, 3]; // chapters
var startPages = [5, 20, 32, 42]; // start page for each chapter, plus the last page of the last chapter plus one

console.log(pageMapHelper(chapters, startPages));
