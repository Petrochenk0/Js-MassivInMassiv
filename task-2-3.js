const sums1 = [
[1, 5, 6],
[7, 2, 4, 6],
[7, 10, 1],
[1, 3]
]

const sums2 = [
[2, 4, 11],
[1, 2, 5, 6],
[3, 10, 1],
[1, 6, 1]
]

let sumAllModuleNumThrist = 0


for (let i = 0; i < sums1.length; i++) {
	for (let j = 0; j < sums1[i].length; j++) {
		if (sums1[i][j] % 2 == 0) {
						sumAllModuleNumThrist = sumAllModuleNumThrist + sums1[i][j];
				}
		}	
}
console.log(sumAllModuleNumThrist);
//
let sumAllModuleNumSecond = 0;

for (let i = 0; i < sums2.length; i++) {
	for (let j = 0; j < sums2[i].length; j++) {
		if (sums2[i][j] % 2 == 0) {
						sumAllModuleNumSecond = sumAllModuleNumSecond + sums2[i][j];
				}
		}	
}
console.log(sumAllModuleNumSecond);

if(sumAllModuleNumThrist>sumAllModuleNumSecond){
	console.log("sums1 >");
}else if(sumAllModuleNumThrist==sumAllModuleNumSecond){
	console.log("sums1==sums2")
}else{
	console.log("sums2 >")
}

