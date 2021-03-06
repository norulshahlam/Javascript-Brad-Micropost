# Project objective

We're going to be building a complete crud application using
E.S. 2015 modules.

Everything we've done up to this point has been able to run right in the browser. We haven't had to compile any code but with modules they haven't been implemented in browsers yet so
we do need some help.

So we're going to use the Babel web packs starter kit that was created. Babel is used to Tran's pile E.S. 2015 (ES6) plus code down to regular ES5 code and we need to do that in order to use modules.

https://www.w3schools.com/js/js_versions.asp

Web pack gives us a nice workflow so that we can use NPM. We can create static assets and we also are using something called the Web pack devs server that will allow us to run a server an autoload server in the browser while we create our application.

# Webpack? what is it?

Webpack is a tool that lets you compile JavaScript modules, also known as module bundler.

Given a large number of files, it generates a single file (or a few files) that run your app.

# Babel: JavaScript Transpilers: What They Are & Why We Need Them

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

Transpilers, or source-to-source compilers, are tools that read source code written in one programming language, and produce the equivalent code in another language. Languages you write that transpile to JavaScript are often called compile-to-JS languages, and are said to target JavaScript.

They read CoffeeScript, TypeScript, and ES2015, and spit out JavaScript guaranteed to work anywhere.

https://babeljs.io/docs/en/

https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them

# Babel Webpack Starter

A starter pack to build JavaScript applications using standards from ES2015, ES2016 & ES2017. It uses webpack, Babel and webpack-dev-server to compile and serve. It is fully compatible with Async/Await as it uses the Babel polyfill.

### Version

1.1.0

## Usage

### Installation

Install the dependencies

```sh
$ npm install
```

### Serve

To serve in the browser - Runs webpack-dev-server

```sh
$ npm start
```

### Build

Compile and build

```sh
$ npm run build
```

## More Info

### Author

Brad Traversy
[Traversy Media](http://www.traversymedia.com)

### License

This project is licensed under the MIT License
