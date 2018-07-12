# [RunSPA](#runspa) 
![bower][bower-image] [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![][jsdelivr-image]][jsdelivr-url] 

> A simple jQuery Single Page Application Plugin 

- [Lanx HCM Projects](http://www.lanx.com.br)

## Getting started

### Quick start

Three quick start options are available:

- [Download the latest release](https://github.com/carlosrfjunior/runspa/archive/master.zip).
- Clone the repository: `git clone https://github.com/carlosrfjunior/runspa.git`.
- Install with [NPM](https://www.npmjs.com/package/runspa): `npm install runspa`.
- Install with [Bower](http://bower.io): `bower install runspa`.
- Install with [Yarn](https://yarn.pm/runspa): `yarn add runspa`.

### Installation

Include files:

```
dist/
├── runspa.js      (72 KB)
└── runspa.min.js  (65 KB)
```

```html
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->
<script src="/path/dist/runspa.min.js"></script>
```

## Basic Use

- General Definitions

```javascript
$.runspa({
    id: 'ID Main Container',
    defaultPage: 'Route Default',
    title: 'Title Default'
});
```

- All Definitions Available

```javascript
$.runspa({
        id: undefined,
        language: 'en',
        defaultPage: undefined,
        pageError: undefined,
        autoCreateRoute: false,
        method: 'GET',
        cache: false,
        async: false,
        data: undefined,
        dataType: 'html',
        extension: undefined,
        prefix: undefined,
        classActive: 'active',
        success: undefined,
        beforeSend: undefined,
        error: undefined,
        loading: true,
        loadingClass: undefined,
        loadingLabel: 'Loading...',
        loadingImage: '[Data Image Base64]'
});
```

- Routes Definitions

```javascript
$.runspa.route('Route Hash', {
	title: 'Description Page',
	path: 'client', /* Optional */
	autoCreateRoute: true, /* Optional */
	metaTag: { /* All Meta Tags HTML*/
		'keywords': '...',
		'description': '...'
	},
	css: [
		{url: 'path/style1.css'},
		{url: 'path/style2.css'},
	],
	scripts: [
		{url: 'path/scripts1.js' /* async optional */},
		{url: 'path/scripts2.js' /* async optional */}
	],
	beforeSend: function () {
		/* Code */
	},
	success: function (e) {
		/* Code */
	},
	error: function (e) {
		/* Code */
	}
}, function (page) {
	/* Code */
});
```

## Events

Load the page required

```javascript
$.runspa.get(name, [options, function]);
```

Load files javascript or CSS

```javascript
$.runspa.inject({
    css: [
		{url: 'path/style1.css'},
		{url: 'path/style2.css'},
	],
	scripts: [
		{url: 'path/scripts1.js' /* async optional */},
		{url: 'path/scripts2.js' /* async optional */}
	]
});
```

Load Files CSS

```javascript
$.runspa.inject({
    css: [
		{url: 'path/style1.css'},
		{url: 'path/style2.css'},
	]
});
```

Load Files JavaScript

```javascript
$.runspa.inject({
	scripts: [
		{url: 'path/scripts1.js' /* [async=true] optional */},
		{url: 'path/scripts2.js' /* [async=true] optional */}
	]
});
```

## Author

[Carlos Júnior](https://github.com/carlosrfjunior)

## Issues

Please post issues and feature request here [Github issues](https://github.com/carlosrfjunior/runspa/issues)

## Copyright and License

[MIT](http://opensource.org/licenses/MIT) © 2018 [Carlos R F Júnior](http://www.lanx.com.br)

[⬆ back to top](#runspa)

[bower-image]: https://badge.fury.io/bo/runspa.svg
[npm-url]: https://npmjs.org/package/runspa
[npm-image]: https://badge.fury.io/js/runspa.svg
[travis-image]: https://travis-ci.org/carlosrfjunior/runspa.svg?branch=master
[travis-url]: https://travis-ci.org/carlosrfjunior/runspa
[jsdelivr-image]: https://data.jsdelivr.com/v1/package/npm/runspa/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/runspa
