export function general(start: number, end: number, maximum: number): number {
	let difference = end - start;
	difference %= maximum;
	const halfMax = maximum / 2;
	if (difference > halfMax) {
		difference -= maximum;
	} else if (difference < -halfMax) {
		difference += maximum;
	}

	return difference;
}

export function degree(start: number, end: number): number {
	return general(start, end, 360);
}

export function radian(start: number, end: number): number {
	return general(start, end, Math.PI * 2);
}
