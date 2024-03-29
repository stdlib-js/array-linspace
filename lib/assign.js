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

var isComplexLike = require( '@stdlib/assert-is-complex-like' );
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isCollection = require( '@stdlib/assert-is-collection' );
var format = require( '@stdlib/string-format' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var dtype = require( '@stdlib/complex-dtype' );
var adtype = require( '@stdlib/array-dtype' );
var reinterpret64 = require( '@stdlib/strided-base-reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
var acccmplx = require( './accessors_complex.js' );
var accreal = require( './accessors_real.js' );
var typedcmplx = require( './typed_complex.js' );
var typedreal = require( './typed_real.js' );
var validate = require( './validate.js' );
var defaults = require( './defaults.json' );


// MAIN //

/**
* Generates a linearly spaced sequence over a specified interval and assigns the results to a provided output array.
*
* @param {(number|ComplexLike)} start - start of interval
* @param {(number|ComplexLike)} stop - end of interval
* @param {Collection} out - output array
* @param {Options} [options] - options
* @param {boolean} [options.endpoint=true] - boolean indicating whether to include the `stop` value in the output array
* @throws {TypeError} first argument must be either a real or complex number
* @throws {TypeError} second argument must be either a real or complex number
* @throws {TypeError} third argument must be an array-like object
* @throws {TypeError} last argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} the output array data type must be a complex number data type or "generic" when either `start` or `stop` is a complex number
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var out = new Float64Array( 6 );
* var arr = linspace( 0, 100, out );
* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
*/
function linspace( start, stop, out ) {
	var opts;
	var err;
	var dt1;
	var dt2;
	var flg;
	var odt;
	var o;

	if ( typeof start === 'object' ) {
		dt1 = dtype( start );
		if ( dt1 === null ) {
			if ( !isComplexLike( start ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be either a real or complex number. Value: `%s`.', start ) );
			}
			dt1 = 'complex128';
		}
		flg = true;
	} else if ( !isNumber( start ) || isnan( start ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be either a real or complex number. Value: `%s`.', start ) );
	} else {
		dt1 = 'float64';
	}
	if ( typeof stop === 'object' ) {
		dt2 = dtype( stop );
		if ( dt2 === null ) {
			if ( !isComplexLike( stop ) ) {
				throw new TypeError( format( 'invalid argument. Second argument must be either a real or complex number. Value: `%s`.', stop ) );
			}
			dt2 = 'complex128';
		}
		flg = true;
	} else if ( !isNumber( stop ) || isnan( stop ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be either a real or complex number. Value: `%s`.', stop ) );
	} else {
		dt2 = 'float64';
	}
	if ( !isCollection( out ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be an array-like object. Value: `%s`.', out ) );
	}
	opts = {
		'endpoint': defaults.endpoint
	};
	if ( arguments.length > 3 ) {
		err = validate( opts, arguments[ 3 ] );
		if ( err ) {
			throw err;
		}
	}
	odt = adtype( out );
	if ( odt === null ) {
		odt = 'generic';
	}
	if ( odt === 'complex64' ) {
		typedcmplx( reinterpret64( out, 0 ), dt1, start, dt2, stop, out.length, opts.endpoint ); // eslint-disable-line max-len
		return out;
	}
	if ( odt === 'complex128' ) {
		typedcmplx( reinterpret128( out, 0 ), dt1, start, dt2, stop, out.length, opts.endpoint ); // eslint-disable-line max-len
		return out;
	}
	if ( flg ) {
		if ( odt === 'generic' ) {
			o = arraylike2object( out );
			acccmplx( o, dt1, start, dt2, stop, out.length, opts.endpoint );
			return out;
		}
		throw new TypeError( 'invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.' );
	}
	o = arraylike2object( out );
	if ( o.accessorProtocol ) {
		accreal( o, start, stop, out.length, opts.endpoint );
		return out;
	}
	typedreal( out, start, stop, out.length, opts.endpoint );
	return out;
}


// EXPORTS //

module.exports = linspace;
