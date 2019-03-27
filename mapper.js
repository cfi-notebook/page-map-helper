var yaml = require('js-yaml');
var chapters = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,38,45,46,49,52,73,74,76,77,78,79,80];
var startPages = [18,54,60,74,84,98,106,118,134,140,152,156,164,182,192,196,214,216,218,220,226,238,240,242,244,246,248,250,252];
var arrayIndex = 0;
var i = 1;
var output = [];
var nextChapterPage;

while (arrayIndex < chapters.length) {
  nextChapterPage = startPages[arrayIndex + 1];
  while (startPages[arrayIndex] < nextChapterPage) {
    output.push(chapters[arrayIndex].toString() + "-" + i.toString() + "#" + startPages[arrayIndex].toString());
    i++;
    startPages[arrayIndex]++;
  }
  arrayIndex++;
  i = 1;
}
console.log(yaml.dump(output).replace(/'/g,''));
