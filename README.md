# Open Graph Protocol Parser

This module is a library to extract OGP tag information and SEO related tag information from URL
and a fork of [ogpParser](https://github.com/ukyoda/ogpParser.).

## Dependent library

- cheerio
- follow-redirects (new)
- jsChardet
- iconv-lite

## Installation

`bash $ npm install @akumzy/ogp-parser`

## How to use

```javascript
import ogp from '@akumzy/ogp-parser'
```

## Sample (with redirect)

```javascript
import ogp from '@akumzy/ogp-parser'
const url = 'http://ogp.me'

parser(url, true)
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.error(error)
  })
```

## Sample (without redirect)

```javascript
import ogp from '@akumzy/ogp-parser'
const url = 'http://ogp.me'

parser(url, false)
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.error(error)
  })
```

## Output

```json
{
  "title": "The Open Graph protocol",
  "ogp": {
    "og: title": ["Open Graph protocol"],
    "og: type": ["website"],
    "og: url": ["http://ogp.me/"],
    "og: image": ["http://ogp.me/logo.png"],
    "og: image: type": ["image / png"],
    "og: image: width": ["300"],
    "og: image: height": ["300"],
    "og: description": ["The Open Graph protocol enables any web page to become a rich object in a social graph."],
    "fb: app_id": ["115190258555800"]
  },
  "seo": {
    "description": ["The Open Graph protocol enables any web page to become a rich object in a social graph."]
  }
}
```

## Disclaimer etc

- This library has been set to MIT license
- This library has no restriction on commercial use
