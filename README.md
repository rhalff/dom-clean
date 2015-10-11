# Dom Clean

Simple dom utility to strip comments from a dom tree and removes empty blank spaces.

To ensure traversing will only meet ELEMENT_NODEs or TEXT_NODEs.

Usage:
```
var dc = require('dom-clean');
var el = document.body;
dc.clean(el);
```

Test:
```
testem
```
