<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# rempio2f

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute `x - nπ/2 = r` (single-precision).

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-rempio2f
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
var rempio2f = require( '@stdlib/math-base-special-rempio2f' );
```

#### rempio2f( x, y )

Computes `x - nπ/2 = r`.

```javascript
var y = [ 0.0 ];
var n = rempio2f( 128.0, y );
// returns 81

var y1 = y[ 0 ];
// returns ~0.765
```

When `x` is `NaN` or infinite, the function returns `0` and sets `y[0]` to `NaN`.

```javascript
var y = [ 0.0 ];
var n = rempio2f( NaN, y );
// returns 0

var y1 = y[ 0 ];
// returns NaN

y = [ 0.0 ];
n = rempio2f( Infinity, y );
// returns 0

y1 = y[ 0 ];
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function returns `n` and stores the remainder `r` as `y[0]`.
-   For input values larger than `2^28*π/2` in magnitude, the function **only** returns the last three binary digits of `n` and not the full result.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var rempio2f = require( '@stdlib/math-base-special-rempio2f' );

var x = linspace( 0.0, 100.0, 100 );
var y = [ 0.0 ];
var n;
var i;

for ( i = 0; i < x.length; i++ ) {
    n = rempio2f( x[ i ], y );
    console.log( '%d - %dπ/2 = %d', x[ i ], n, y[ 0 ] );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/rempio2f.h"
```

#### stdlib_base_rempio2f( x, &rem )

Computes `x - nπ/2 = r` (single-precision).

```c
#include <stdint.h>

double rem;

int32_t n = stdlib_base_rempio2f( 4.0f, &rem );
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **rem**: `[out] double*` destination for the remainder.

```c
int32_t stdlib_base_rempio2f( const float x, double *rem );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/rempio2f.h"
#include <stdio.h>
#include <stdint.h>
#include <inttypes.h>

int main( void ) {
    const float x[] = { 0.0f, 1.0f, 4.0f, 128.0f };

    double rem;
    int32_t n;
    int i;
    for ( i = 0; i < 4; i++ ) {
        n = stdlib_base_rempio2f( x[ i ], &rem );
        printf( "%f - %"PRId32"π/2 = %lf\n", x[ i ], n, rem );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-rempio2f.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-rempio2f

[test-image]: https://github.com/stdlib-js/math-base-special-rempio2f/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-rempio2f/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-rempio2f/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-rempio2f?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-rempio2f.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-rempio2f/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-rempio2f/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-rempio2f/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-rempio2f/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-rempio2f/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-rempio2f/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-rempio2f/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-rempio2f/blob/main/branches.md

</section>

<!-- /.links -->
