[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# React Static Landing Page

This repo leverages [`react-static`](http://github.com/jxnblk/react-static) to
build a marketing-ready, static HTML page built from **stateless React components**,
which can then manipulated by jQuery and other global scripts.

### Directory Structure

The `js/components` folder is for *stateless* React components. These are compiled
from the `components/root.jsx' file into a static format.

The `js/static` folder is where you will write your messy `window` object code, which will be concatenated into one `scripts` file.
