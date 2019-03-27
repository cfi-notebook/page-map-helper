# @cfi-notebook/page-map-helper

## Description

A shortcut library for building reference maps for `1-1` style chapters where
we know the page on which each chapter starts and need a reference to each
page.

## Usage

```javascript
// build.js
var pageMapHelper = require('@cfi-notebook/page-map-helper');

var chapters = [1,2,3]; // chapters
var startPages = [5,20,32,42]; // start page for each chapter, plus the last page of the last chapter

console.log(pageMapHelper(chapters,strPages));
```

Returns a string...

```yaml
- 1-4#8
- 1-5#9
- 1-6#10
- 1-7#11
- 1-8#12
- 1-9#13
- 1-10#14
- 1-11#15
- 1-12#16
- 1-13#17
- 1-14#18
- 1-15#19
- 2-1#20
- 2-2#21
- 2-3#22
- 2-4#23
- 2-5#24
- 2-6#25
- 2-7#26
- 2-8#27
- 2-9#28
- 2-10#29
- 2-11#30
- 2-12#31
- 3-1#32
- 3-2#33
- 3-3#34
- 3-4#35
- 3-5#36
- 3-6#37
- 3-7#38
- 3-8#39
- 3-9#40
- 3-10#41
```
