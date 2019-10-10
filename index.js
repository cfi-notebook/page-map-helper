'use strict';

var yaml = require('js-yaml');

module.exports = function(chapters, startPages) {
  var arrayIndex = 0;
  var i = 1;
  var output = [];
  var nextChapterPage;

  while (arrayIndex < chapters.length) {
    nextChapterPage = startPages[arrayIndex + 1];
    while (startPages[arrayIndex] < nextChapterPage) {
      output.push(
        chapters[arrayIndex].toString() +
          '-' +
          i.toString() +
          '#' +
          startPages[arrayIndex].toString()
      );
      i++;
      startPages[arrayIndex]++;
    }
    arrayIndex++;
    i = 1;
  }
  return yaml.dump(output).replace(/'/g, '');
};
