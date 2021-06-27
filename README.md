<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Linspace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Generate a linearly spaced numeric array.

<section class="installation">

## Installation

```bash
npm install @stdlib/array-linspace
```

</section>

<section class="usage">

## Usage

```javascript
var linspace = require( '@stdlib/array-linspace' );
```

#### linspace( start, stop\[, length] )

Generates a linearly spaced numeric `array`. If a `length` is not provided, the default output `array` length is `100`.

```javascript
var arr = linspace( 0, 100, 6 );
// returns [ 0, 20, 40, 60, 80, 100 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The output `array` is guaranteed to include the `start` and `stop` values. Beware, however, that values between the `start` and `stop` are subject to floating-point errors. Hence,

    ```javascript
    var arr = linspace( 0, 1, 3 );
    // returns [ 0, ~0.5, 1 ]
    ```

    where `arr[1]` is only guaranteed to be approximately equal to `0.5`. If you desire more control over element precision, consider using [roundn][@stdlib/math/base/special/roundn]:

    ```javascript
    var roundn = require( '@stdlib/math-base-special-roundn' );

    // Create an array subject to floating-point errors:
    var arr = linspace( 0, 1, 21 );

    // Round each value to the nearest hundredth:
    var out = [];
    var i;
    for ( i = 0; i < arr.length; i++ ) {
        out.push( roundn( arr[ i ], -2 ) );
    }

    console.log( out.join( '\n' ) );
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-linspace' );
var out;

// Default behavior:
out = linspace( 0, 10 );
console.log( out.join( '\n' ) );

// Specify length:
out = linspace( 0, 10, 10 );
console.log( out.join( '\n' ) );

out = linspace( 0, 10, 11 );
console.log( out.join( '\n' ) );

// Create an array with decremented values:
out = linspace( 10, 0, 11 );
console.log( out.join( '\n' ) );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-linspace.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-linspace

[test-image]: https://github.com/stdlib-js/array-linspace/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/array-linspace/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-linspace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-linspace?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-linspace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-linspace/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-linspace/main/LICENSE

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math-base-special-roundn

</section>

<!-- /.links -->
