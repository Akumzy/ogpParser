# Open Graph Protocol Parser

This module is a library to extract OGP tag information and SEO related tag information from URL.

## Change log

* January 2018: v0.4.1 released (refactoring, ES2015 compatible, others)
* August 2016: v0.4.0 released (Refactoring, Promise compatible, many others fixed)
* July 2016: v0.3.1 release (support for character code other than UTF-8)
* May 2015: v0.3.0 released
* April 2015: Added support for redirection. If the third argument is true, track redirects and get pages
* March 2015: https compatible
* March 2015: Add page title information
* June 2014: Correct the data format
* June 2014: Add seo tag (name, content meta tag)



> Starting with v0.4.0, we have introduced promises and changed the library specifications.
> Please be careful if you use a library of v0.3.1 or earlier.

## Dependent library

* cheerio
* follow-redirects (new)
* jsChardet
* iconv-lite

## Installation

`` `bash
$ npm install ogp-parser
`` `

## How to use

```javascript
var ogp = require('ogp-parser');
```

## Sample (with redirect)

```javascript

var parser = require ("ogp-parser");
var url = "http://ogp.me";
parser (url, true) .then (function (data) {
console.log (data);
}). catch (function (error) {
console.error (error);
});

```

## Sample (without redirect)

```javascript

var parser = require ("ogp-parser");
var url = "http://ogp.me";
parser (url, false) .then (function (data) {
console.log (data);
}). catch (function (error) {
console.error (error);
});

```

## Output

```json
{
    "title": "The Open Graph protocol",
    "ogp": {
        "og: title": [
            "Open Graph protocol"
        ],
        "og: type": [
            "website"
        ],
        "og: url": [
            "http://ogp.me/"
        ],
        "og: image": [
            "http://ogp.me/logo.png"
        ],
        "og: image: type": [
            "image / png"
        ],
        "og: image: width": [
            "300"
        ],
        "og: image: height": [
            "300"
        ],
        "og: description": [
            "The Open Graph protocol enables any web page to become a rich object in a social graph."
        ],
        "fb: app_id": [
            "115190258555800"
        ]
    },
    "seo": {
        "description": [
            "The Open Graph protocol enables any web page to become a rich object in a social graph."
        ]
    }
}

```

## Disclaimer etc

* This library has been set to MIT license
* This library has no restriction on commercial use
