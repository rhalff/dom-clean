# Dom Clean

Simple dom utility to strip comments from a dom tree and removes empty blank spaces.

To ensure traversing will only meet ELEMENT_NODEs or TEXT_NODEs.

Usage:
```Javascript
var DomClean = require('dom-clean').clean;
var el = document.body;
DomClean(el);
```

If you want to keep the comments use:
```Javascript
DomClean(el, true);
```

Test:
```
testem
```
