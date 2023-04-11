import test from 'ava';
import {degree, radian} from '../source/index.js';

test('degree positive', t => {
	t.is(degree(0, 10), 10);
});

test('degree negative', t => {
	t.is(degree(10, 0), -10);
});

test('degree positive over 0', t => {
	t.is(degree(-10, 20), 30);
});

test('degree negative over 0', t => {
	t.is(degree(20, -10), -30);
});

test('degree positive over 0 with positive degree', t => {
	t.is(degree(350, 20), 30);
});

test('degree negative over 0 with positive degree', t => {
	t.is(degree(20, 350), -30);
});

test('radian shortcut', t => {
	t.is(radian(-Math.PI / 2, Math.PI / 2), Math.PI);
});
