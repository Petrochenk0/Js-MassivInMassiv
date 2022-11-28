const sums = [
[1, 5, 6],
[7, 2, 4, 6],
[7, 10, 1],
[1, 3]
]

//max 
let numMax = [];

for(let i = 0;i<sums.length;i++){
	let iNum = 0;
	for(let j = 0; j<sums[i].length;j++){
		iNum = iNum + sums[i][j];
	}
	numMax.push(iNum);
}
let result = Math.max.apply(null, numMax);

console.log(result);

//min

let numMin = [];

for(let i = 0;i<sums.length;i++){
	let iNum1 = 0;
	for(let j = 0; j<sums[i].length;j++){
		iNum1 = iNum1 + sums[i][j];
	}
	numMin.push(iNum1);
}
let resultMin = Math.min.apply(null, numMin);

console.log(resultMin);
//Среднее значение
let avr = 0;

for(let i = 0;i<sums.length;i++){
	let temp = 0;
	for(let j = 0; j<sums[i].length;j++){
		temp = temp + sums[i][j];
	}
	avr = avr + temp;
}
console.info('Среднее значение ' + sums.length + ' сумм равно ' + avr + ' / ' + sums.length + ' = ' + (avr / sums.length) );
