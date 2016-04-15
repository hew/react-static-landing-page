[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# React Static Landing Page

This repo leverages [`static-react`](http://github.com/jxnblk/static-react) to
build a marketing-ready, static HTML page built from **stateless React components**,
which can then manipulated by jQuery and other global scripts.

Basically, this is a project boilerplate. Most of the heavy lifting is being done by `static-react`.

### Directory Structure

The `js/components` folder is for *stateless* React components. These are compiled
from the `components/root.jsx' file into a static format.

The `js/static` folder is where you will write your messy `window` object code, which will be concatenated into one `scripts` file.


## To Start

```shell
$ npm i
```

```shell

$ npm run scripts

# Watches and builds:
# js/components
# js/global
# css/src

```
