# angular-assert-q-constructor [![Build Status](https://travis-ci.org/bendrucker/angular-assert-q-constructor.svg?branch=master)](https://travis-ci.org/bendrucker/angular-assert-q-constructor)
Make sure $q is a constructor (1.3+). Throw if it isn't.

## Installing

```sh
$ npm install angular-assert-q-constructor
```

## API

##### `assertQConstructor(message:String)` -> `undefined`

Inject `assertQConstructor` and call it with an optional error message. If `$q` is a function, it's a noop. Otherwise (i.e. Angular <1.3) it will throw the `message`.
