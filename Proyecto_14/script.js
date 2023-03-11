// start with string, numbers and booleand
let age = 100;
let age2 = age;
// console.log(age, age2);
age = 200;
// console.log(age, age2);

let name = 'santi';
let name2 = name;
// console.log(name, name2);
name = 'santiago';
// console.log(name, name2);

// let's say we hace an array
const players = ['santi', 'leonel', 'marcos', 'mateo'];

// and we want to make a copy of it
const team = players;

// console.log(players, team);

// you minght think we can just do something like this
team[3] = 'lux';

// so, how do we fix this? we take a copy instead
const tema2 = players.slice();

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES5 Spread
const tema4 = [...players];
const tema5 = Array.from(players);

// with objects
const person = {
	name: 'Santiago',
	age: 25
};

// and think we make copy
const captain = person;
captain.number = 11;

// how do we taje a copy instead
const cap2 = Object.assign({}, person, {number: 12, born: 1997 });

// we will hopefully soon see the object ...spread
const cap3 = {...person};

// things to amke - this is only 1 level deep - both for arrays and objecs
// lodash has a cloneDeep method, but you should think twice before using it
const santi = {
	name: 'Santiago',
	age: 25,
	social: {
		twitter: '@santijunco11',
		instagram: '@santiagojunco'
	}
};

// si a dev.name le cambio el nombre a santi.name no le pasa nada
// pero si a dev.social.twitter le cambio, santi.social.twitter si cambia
const dev = Object.assign({}, santi);

// con esto soluciono el problema anterior 
const dev2 = JSON.parse(JSON.stringify(santi));