export function general(start: number, end: number, maximum: number): number {
	let difference = end - start;

	while (Math.abs(difference) > maximum / 2) {
		if (difference > 0) {
			difference -= maximum;
		} else {
			difference += maximum;
		}
	}

	return difference;
}

export function degree(start: number, end: number): number {
	return general(start, end, 360);
}

export function radian(start: number, end: number): number {
	return general(start, end, Math.PI * 2);
}
