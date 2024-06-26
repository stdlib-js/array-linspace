/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isArrayLikeObject = require( '@stdlib/assert-is-array-like-object' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex64Array = require( '@stdlib/array-complex64' );
var Float64Array = require( '@stdlib/array-float64' );
var Float32Array = require( '@stdlib/array-float32' );
var zeros = require( '@stdlib/array-base-zeros' );
var pkg = require( './../package.json' ).name;
var linspace = require( './../lib' );


// MAIN //

bench( pkg+'::real:assign:dtype=float64', function benchmark( b ) {
	var out;
	var v;
	var i;

	out = new Float64Array( 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace.assign( 0.0, 100.0, out );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::real:assign:dtype=float32', function benchmark( b ) {
	var out;
	var v;
	var i;

	out = new Float32Array( 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace.assign( 0.0, 100.0, out );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::real:assign:dtype=generic', function benchmark( b ) {
	var out;
	var v;
	var i;

	out = zeros( 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace.assign( 0.0, 100.0, out );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::complex:assign:dtype=generic', function benchmark( b ) {
	var out;
	var x1;
	var x2;
	var v;
	var i;

	out = zeros( 10 );

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace.assign( x1, x2, out );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::real:assign:dtype=complex128', function benchmark( b ) {
	var out;
	var v;
	var i;

	out = new Complex128Array( 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace.assign( 0.0, 100.0, out );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::complex:assign:dtype=complex128', function benchmark( b ) {
	var out;
	var x1;
	var x2;
	var v;
	var i;

	out = new Complex128Array( 10 );

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace.assign( x1, x2, out );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::real:assign:dtype=complex64', function benchmark( b ) {
	var out;
	var v;
	var i;

	out = new Complex64Array( 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace.assign( 0.0, 100.0, out );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::complex:assign:dtype=complex64', function benchmark( b ) {
	var out;
	var x1;
	var x2;
	var v;
	var i;

	out = new Complex64Array( 10 );

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace.assign( x1, x2, out );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
