# httpplease-prefix

[![Build Status](https://img.shields.io/travis/wyze/httpplease-prefix.svg?style=flat-square)](https://travis-ci.org/wyze/httpplease-prefix)
[![npm](https://img.shields.io/npm/v/httpplease-prefix.svg?style=flat-square)](https://npmjs.com/package/httpplease-prefix)

> A httpplease plugin to prefix all URLs.

## Installation

```js
npm install --save httpplease-prefix
```

## Usage

The function accepts a `string` parameter. If not supplied, it defaults to `/api`.

### ES6
```js
import httpplease from 'httpplease';
import prefix     from 'httpplease-prefix';

const http  = httplease.use(prefix());
const http2 = httpplease.use(prefix('/api/v1'));

http.get('/me');  // Will call /api/me
http2.get('/me'); // Will call /api/v1/me
```

### ES5
```js
var httpplease = require('httpplease');
var prefix     = require('httpplease-prefix');
var http       = httpplease.use(prefix());
var http2      = httpplease.use(prefix('/api/v1'));

http.get('/me');  // Will call /api/me
http2.get('/me'); // Will call /api/v1/me
```

## License

Copyright © 2015 [Neil Kistner](//github.com/wyze)

Released under the MIT license. See [license](license) for details.
