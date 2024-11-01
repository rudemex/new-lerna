'use strict';

const testPkg = require('..');
const assert = require('assert').strict;

assert.strictEqual(testPkg(), 'Hello from testPkg');
console.info('testPkg tests passed');
