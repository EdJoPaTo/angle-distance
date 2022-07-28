# angle-distance

[![NPM Version](https://img.shields.io/npm/v/angle-distance.svg)](https://www.npmjs.com/package/angle-distance)
[![node](https://img.shields.io/node/v/angle-distance.svg)](https://www.npmjs.com/package/angle-distance)

> Calculates the difference between two angles

## Install

```bash
npm install angle-distance
```

## Usage

```js
const angleDistance = require('angle-distance');

angleDistance.degree(10, 30);
//=> 20

angleDistance.degree(30, 10);
//=> -20

angleDistance.degree(350, 10);
//=> 20

angleDistance.radian(-Math.PI / 2, Math.PI / 2);
//=> 3.1415…
```

## API

### angleDistance.degree(start, end)

Calculates the angle in degree between `start` and `end`

#### start

Type: `number`

Start angle

#### end

Type: `number`

Target angle

### angleDistance.radian(start, end)

Calculates the angle in radian between `start` and `end`

### angleDistance.general(start, end, maximum)

Calculates the angle between `start` and `end` while respecting the maximum as 'overflow' point.

#### maximum

Type: `number`

For example with degree the maximum is 360° as it is the same as 0°.
The same goes for radian with 2 * Math.PI as it is the same as 0.
