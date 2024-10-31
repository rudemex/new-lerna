'use strict';

const myPkg = require('..');
const assert = require('assert').strict;

assert.strictEqual(myPkg(), 'Hello from myPkg');
console.info('myPkg tests passed');
