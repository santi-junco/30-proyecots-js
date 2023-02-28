const dogs = [
	{
		name: 'Snickers',
		age: 2
	},
	{
		name: 'hugo',
		age: 8
	}
];

function makeGreen(){
	const p = document.querySelector('p');
	p.style.color = '#BADA55'
	p.style.fontSize = '50px'
};

// Regular
console.log('Hola');

// Interpolated
console.log('Hola %s', 'Mundo');

// Styled
console.log('%cHola Mundo', 'font-size: 20px; background: white; color: black');

// Warning
console.warn('Advertencia');

// Error
console.error('Error');

// Info
console.info('Informacion de muestra'); 

// Testing
const p = document.querySelector('p');
// si es true no muestra nada, es false muestra el mensaje
console.assert(p.classList.contains(2), 'Esto es equivocado');

// clearing
console.clear();

// viewing DOM Elements
// log deveria mostrar la etiqueta html pero no siempre aparece
console.log(p);
console.dir(p);

console.clear();
// Grouping together
dogs.forEach(dog => {
	console.group(`${dog.name}`);
	console.log(`This is ${dog.name} is ${dog.age} years old`);
	console.groupEnd(`${dog.name}`);
});

// couting
console.count('hola');
console.count('hola');
console.count('hola');
console.count('hola');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos').then(data => data.json()).then(data => {
	console.timeEnd('fetching data')
	console.log(data)
});

// table
console.table(dogs)