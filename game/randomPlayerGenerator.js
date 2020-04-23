const fighterClasses = require('./data/fighterClasses.js');
const entityGenerator = require('./entityGenerator.js');

function * generateRandomPlayer(){
	
	while(true){
		let k = Object.keys(fighterClasses)[Math.floor(Math.random() * Object.keys(fighterClasses).length)]
		yield entityGenerator(fighterClasses[k]);
	}
}

module.exports = generateRandomPlayer;

/*
let a = generateRandomPlayer();
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
*/