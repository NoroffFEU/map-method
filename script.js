// example 1
const numbers = [1, 2, 3, 4, 5];

console.log(numbers);

const multipliedNumbers = numbers.map(function (number) {
	return number * 3;
});

// const multipliedNumbers = numbers.map((number) => number * 3);

console.log(multipliedNumbers);

// example 2
const animals = ["dog", "cat", "elephant"];

// const animalDivs = animals.map(function (animal) {
// 	return `<div>${animal}</div>`;
// });

const animalDivs = animals.map((animal) => `<div>${animal}</div>`);

console.log(animalDivs);
