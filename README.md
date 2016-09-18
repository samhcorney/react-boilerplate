# HTML Boilerplate

A rewrite of the [react tutorial](https://facebook.github.io/react/docs/tutorial.html) using [ES6](http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes)
Built on top of [this](https://github.com/samhcorney/html-boilerplate) html boilerplate

Includes support for React, Browserify, TypeScript, SCSS and SVGs.

## Getting Started

### Prerequisites

1. Install [Node/NPM](https://nodejs.org/en/download/)
2. Install Gulp globally

```
npm install --global gulp-cli
```
### Installing

```
git clone https://github.com/samhcorney/react-boilerplate.git
```

```
npm install
```

## Features

* Gulp for build automation

### React

### JavaScript
* TypeScript ready
* JS Source Maps

### SCSS

* Support for [Bourbon](http://bourbon.io)
* Support for [Neat](http://neat.bourbon.io)
* [CSS Reset](http://meyerweb.com/eric/tools/css/reset)
* CSS Source Maps
* Vendor prefixes added for the last two browser versions

### SVG

* With gulp running add SVGs to app/fonts/svg
* SVGs are automatically cleaned up and prepared
* Backwards compatibility for non-supporting browsers is provided by [svgxuse](https://github.com/Keyamoon/svgxuse)

Once added an SVG can be included in your HTML with the following:

```
<svg class="icon-[SVG_NAME]"><use xlink:href="/build/fonts/svg-symbols.svg#[SVG_NAME]"></use></svg>
```

## Roadmap
* Add support for RXJS
* Add support for react
* Minify JS as production task
* Minify CSS as production task
* Add Modernizr
* Add production build tasks
* Deployment automation via Node
* Create separate branch for Bourbon/Neat support
* Create separate branch for TypeScript/Browserify support
* Create separate branch for jQuery support
* Unit testing boilerplate
* End to end testing boilerplate

* Turn on production mode for NODE/REACT as part of build process
