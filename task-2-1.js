
let films = [
	"Человек паук",
	"фильм Программисты",
	"Ральф",
];
let watchFilm = prompt(`Смотрели ли вы ${films[0]}`);

let watchFilm2 = prompt(`Смотрели ли вы ${films[1]}`);

let watchFilm3 = prompt(`Смотрели ли вы ${films[2]}`);

let answer = [];

answer.push(watchFilm);
answer.push(watchFilm2);
answer.push(watchFilm3);

alert(`Человек паук ${watchFilm}\n фильм Программисты ${watchFilm2}\n Ральф ${watchFilm3}`);

