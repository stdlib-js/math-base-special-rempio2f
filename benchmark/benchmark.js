/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var uniform = require( '@stdlib/random-array-uniform' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var pkg = require( './../package.json' ).name;
var rempio2f = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var n;
	var i;

	y = [ 0.0 ];
	x = uniform( 100, -100.0, 100.0, {
		'dtype': 'float32'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		n = rempio2f( x[ i % x.length ], y );
		if ( isnanf( n ) || isnanf( y[0] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( n ) || isnanf( y[0] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
