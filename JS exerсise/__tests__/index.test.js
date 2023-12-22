// @ts-check
/* eslint-disable */

import { test } from 'node:test';
import assert from 'assert/strict';
import * as funcs from '../index.js';

test('step1', () => {
  assert.strictEqual(funcs.multiply(2, 5), 10);
  assert.strictEqual(funcs.multiply(4, 0), 0);
  assert.strictEqual(funcs.multiply(4, -2), -8);
});

test('step2', () => {
  assert.ok(funcs.getRandom(1000000) !== funcs.getRandom(1000000), 'число не является случайным');
  assert.ok(funcs.getRandom(100) < 100 && funcs.getRandom(15) >= 0, 'число выходит за пределы значений');
  assert.ok(funcs.getRandom(2) < 2 && funcs.getRandom(5) >= 0 && Number.isInteger(funcs.getRandom(100)), 'число не является целым или выходит за пределы значений');
});

test('step3', () => {
  assert.strictEqual(funcs.convertToString(1), '1');
  assert.strictEqual(funcs.convertToString(0), '0');
  assert.strictEqual(funcs.convertToString(NaN), 'NaN');
  assert.strictEqual(funcs.convertToString(42), 'the meaning of life and the universe');
});

test('step4', () => {
  assert.strictEqual(funcs.reverse('Hexlet'), 'telxeH');
  assert.strictEqual(funcs.reverse('HeLlO!'), '!OlLeH');
});

test('step5', () => {
  assert.strictEqual(funcs.countSyllables('Hex-let'), 2);
  assert.strictEqual(funcs.countSyllables(''), 0);
  assert.strictEqual(funcs.countSyllables('He-he-he-he-he'), 5);
  assert.strictEqual(funcs.countSyllables('Hex'), 1);
});
