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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# linspace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Generate a linearly spaced array over a specified interval.

<section class="installation">

## Installation

```bash
npm install @stdlib/array-linspace
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var linspace = require( '@stdlib/array-linspace' );
```

#### linspace( start, stop, length\[, options] )

Generates a linearly spaced array over a specified interval.

```javascript
var arr = linspace( 0.0, 100.0, 6 );
// returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
```

If `length` is `0`, the function returns an empty array.

```javascript
var arr = linspace( 0.0, 100.0, 0 );
// returns <Float64Array>[]
```

If `length` is `1`, the function returns an array containing `stop`, but not `start`, when `endpoint` is `true`; otherwise, the function returns an array containing `start`, but not `stop`.

```javascript
var arr = linspace( 0.0, 100.0, 1 );
// returns <Float64Array>[ 100.0 ]

arr = linspace( 0.0, 100.0, 1, {
    'endpoint': true
});
// returns <Float64Array>[ 100.0 ]

arr = linspace( 0.0, 100.0, 1, {
    'endpoint': false
});
// returns <Float64Array>[ 0.0 ]
```

For real-valued `start` and `stop`, if `start` is less than `stop`, the output array will contain ascending values, and, if `start` is greater than `stop`, the output array will contain descending values.

```javascript
var arr = linspace( 0.0, -100.0, 6 );
// returns <Float64Array>[ 0.0, -20.0, -40.0, -60.0, -80.0, -100.0 ]
```

The function accepts the following `options`:

-   **dtype**: output array data type. Must be a [floating-point data type][@stdlib/array/typed-float-dtypes] or `'generic'`. If both `start` and `stop` are the same type (either `'float64'`, `'complex64'`, or `'complex128'`), the default output array data type is the same type as the input values (either `'float64'`, `'complex64'`, or `'complex128'`, respectively). Otherwise, the default output array data type is `'complex128'`.
-   **endpoint**: `boolean` indicating whether to include the `stop` value in the output array. If `false`, the function generates `length + 1` linearly spaced values over the interval `[start, stop]` and only writes `length` values to the output array, thus excluding `stop` from the output array. Accordingly, for a fixed `length`, the spacing between adjacent values in the output array changes depending on the value of `endpoint`. Default: `true`.

By default, the function generates a linearly spaced array over the closed interval `[start, stop]`. To generate linearly spaced values over the half-open interval `[start, stop)`, set the `endpoint` option to `false`.

```javascript
var opts = {
    'endpoint': false
};
var arr = linspace( 0.0, 100.0, 5, opts );
// returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0 ]
```

When both `start` and `stop` are real-valued, the default output array data type is `'float64'`. To return an output array having a different data type, set the `dtype` option.

```javascript
var opts = {
    'dtype': 'generic'
};
var arr = linspace( 0, 100, 6, opts );
// returns [ 0, 20, 40, 60, 80, 100 ]
```

When either `start` or `stop` is a complex number, the default output array data type is `'complex128'`. To return an output array having a different data type, set the `dtype` option.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var opts = {
    'dtype': 'generic'
};

var start = new Complex128( 0.0, 0.0 );
var stop = new Complex128( 100.0, 10.0 );

var arr = linspace( start, stop, 6, opts );
// returns [ <Complex128>, <Complex128>, <Complex128>, <Complex128>, <Complex128>, <Complex128> ]

var z = arr[ 0 ];
// returns <Complex128>

var re = real( z );
// returns 0.0

var im = imag( z );
// returns 0.0

z = arr[ 1 ];
// returns <Complex128>

re = real( z );
// returns 20.0

im = imag( z );
// returns 2.0

// ...
```

#### linspace.assign( start, stop, out\[, options] )

Generates a linearly spaced sequence over a specified interval and assigns the results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 6 );
var arr = linspace.assign( 0.0, 100.0, out );
// returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]

var bool = ( arr === out );
// returns true
```

If the provided output array is empty, the function returns the provided output array unchanged.

```javascript
var arr = linspace.assign( 0.0, 100.0, [] );
// returns []
```

If the provided output array contains a single element, the function writes the `stop` value, but not `start`, when `endpoint` is `true`; otherwise, the function writes the `start` value, but not `stop`.

```javascript
var arr = linspace.assign( 0.0, 100.0, [ -10.0 ] );
// returns [ 100.0 ]

arr = linspace.assign( 0.0, 100.0, [ -10.0 ], {
    'endpoint': true
});
// returns [ 100.0 ]

arr = linspace.assign( 0.0, 100.0, [ -10.0 ], {
    'endpoint': false
});
// returns [ 0.0 ]
```

For real-valued `start` and `stop`, if `start` is less than `stop`, the output array will contain ascending values, and, if `start` is greater than `stop`, the output array will contain descending values.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 6 );
var arr = linspace.assign( 0.0, -100.0, out );
// returns <Float64Array>[ 0.0, -20.0, -40.0, -60.0, -80.0, -100.0 ]
```

The function accepts the following `options`:

-   **endpoint**: `boolean` indicating whether to include the `stop` value in the output array. If `false`, the function generates `N + 1` linearly spaced values (where `N` is the length of the provided output array) over the interval `[start, stop]` and only writes `N` values to the output array, thus excluding `stop` from the output array. Accordingly, for a fixed `N`, the spacing between adjacent values in the output array changes depending on the value of `endpoint`. Default: `true`.

By default, the function generates a linearly spaced array over the closed interval `[start, stop]`. To generate linearly spaced values over the half-open interval `[start, stop)`, set the `endpoint` option to `false`.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var opts = {
    'endpoint': false
};

var out = new Float64Array( 5 );
var arr = linspace.assign( 0.0, 100.0, out, opts );
// returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For `M >= 2`, the spacing between values is computed as

    ```text
    delta = (stop-start) / (M-1)
    ```

    where `M` is the number of values to generate. Accordingly, values may not be evenly spaced due to floating-point rounding errors.

-   When the output array length is greater than `1` and `endpoint` is `true`, the output array is guaranteed to include the `start` and `stop` values. Beware, however, that values between `start` and `stop` are subject to floating-point rounding errors. Hence,

    ```javascript
    var arr = linspace( 0.0, 1.0, 3 );
    // returns <Float64Array>[ 0.0, ~0.5, 1.0 ]
    ```

    where `arr[1]` is only guaranteed to be approximately equal to `0.5`. If you desire more control over element precision, consider using [`roundn`][@stdlib/math/base/special/roundn]:

    ```javascript
    var roundn = require( '@stdlib/math-base-special-roundn' );

    // Create an array subject to floating-point rounding errors:
    var arr = linspace( 0.0, 1.0, 3, {
        'dtype': 'generic'
    });

    // Round each value to the nearest hundredth:
    var i;
    for ( i = 0; i < arr.length; i++ ) {
        arr[ i ] = roundn( arr[ i ], -2 );
    }
    console.log( arr );
    // => [ 0.0, 0.5, 1.0 ]
    ```

-   For both functions, if both `start` and `stop` are real-valued, the output array data type may be any [floating-point data type][@stdlib/array/typed-float-dtypes] or `'generic'`. However, if either `start` or `stop` are complex numbers, the output array type must be a [complex floating-point data type][@stdlib/array/typed-complex-dtypes] or `'generic'`.

-   While the `assign` method accepts any array-like object for the output array when both `start` and `stop` are real-valued, providing an integer-valued typed array (e.g., [`Int32Array`][@stdlib/array/int32], etc) is not encouraged due to potential rounding errors during value generation and assignment and, thus, irregular spacing between adjacent values. Instead, consider using [`incrspace`][@stdlib/array/incrspace].

-   When writing to a complex floating-point output array, real-valued `start` and `stop` values are treated as complex numbers having a real component equaling the provided value and having an imaginary component equaling `0`.

-   When generating linearly spaced complex floating-point numbers, the real and imaginary components are generated separately (i.e., real components are generated over the interval `[real(start), real(stop)]` and imaginary components are generated over the interval `[imag(start), imag(stop)]`).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-linspace' );

// Define function options:
var opts = {
    'dtype': 'generic'
};

// Create arrays of varying lengths...
var out = linspace( 0, 10, 10, opts );
console.log( out );

out = linspace( 0, 10, 11, opts );
console.log( out );

out = linspace( 0, 10, 21, opts );
console.log( out );

// Create an array with decremented values:
out = linspace( 10, 0, 11, opts );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-incrspace`][@stdlib/array/incrspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array using a provided increment.</span>
-   <span class="package-name">[`@stdlib/array-logspace`][@stdlib/array/logspace]</span><span class="delimiter">: </span><span class="description">generate a logarithmically spaced numeric array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-linspace.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-linspace

[test-image]: https://github.com/stdlib-js/array-linspace/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-linspace/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-linspace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-linspace?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-linspace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-linspace/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-linspace/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-linspace/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-linspace/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-linspace/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-linspace/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-linspace/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-linspace/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-linspace/main/LICENSE

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math-base-special-roundn

[@stdlib/array/typed-float-dtypes]: https://github.com/stdlib-js/array-typed-float-dtypes

[@stdlib/array/typed-complex-dtypes]: https://github.com/stdlib-js/array-typed-complex-dtypes

[@stdlib/array/int32]: https://github.com/stdlib-js/array-int32

[@stdlib/array/incrspace]: https://github.com/stdlib-js/array-incrspace

<!-- <related-links> -->

[@stdlib/array/logspace]: https://github.com/stdlib-js/array-logspace

<!-- </related-links> -->

</section>

<!-- /.links -->
