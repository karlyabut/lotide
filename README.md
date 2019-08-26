# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @karlyabut/lotide`

**Require it:**

`const _ = require('@karlyabut/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: checks if both value is equal
* `assertArraysEqual(...)`: checks if both arrays are equal
* `head(...)`: returns index[0] of an array
* `eqArrays(...)`: checks if both arrays are equal
* `middle(...)`: returns the middle element of an array
* `tail(...)`: removes index[0] and returns the remaining elements of the array