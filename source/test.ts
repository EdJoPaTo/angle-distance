import {strictEqual} from 'node:assert';
import {test} from 'node:test';
import {degree, radian} from './index.js';

await test('degree positive', () => {
	strictEqual(degree(0, 10), 10);
});

await test('degree negative', () => {
	strictEqual(degree(10, 0), -10);
});

await test('degree positive over 0', () => {
	strictEqual(degree(-10, 20), 30);
});

await test('degree negative over 0', () => {
	strictEqual(degree(20, -10), -30);
});

await test('degree positive over 0 with positive degree', () => {
	strictEqual(degree(350, 20), 30);
});

await test('degree negative over 0 with positive degree', () => {
	strictEqual(degree(20, 350), -30);
});

await test('radian shortcut', () => {
	strictEqual(radian(-Math.PI / 2, Math.PI / 2), Math.PI);
});
