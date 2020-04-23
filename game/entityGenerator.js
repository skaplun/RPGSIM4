
const character = require('./data/character.js')
const characterBody = require('./data/characterBody.js')
const basicAttackSkills = require('./data/basicAttackSkills.js')
const bladedWeaponSkills = require('./data/bladedWeaponSkills.js')
const bluntWeaponSkills = require('./data/bluntWeaponSkills.js')
const dualWeaponSkills = require('./data/dualWeaponSkills.js')
const haftedWeaponSkills = require('./data/haftedWeaponSkills.js')
const heavyWeaponSkills = require('./data/heavyWeaponSkills.js')
const magicSkills = require('./data/magicSkills.js')
const martialSkills = require('./data/martialSkills.js')
const weapons = require('./data/weapons.js')
// const effects = require('../data/effects.js')

const _ = require('lodash');

let skillCodes = {
	'batt' : basicAttackSkills,
	'mart' : martialSkills,
	'blad' : bladedWeaponSkills,
	'haft' : haftedWeaponSkills,
	'heav' : heavyWeaponSkills,
	'blun' : bluntWeaponSkills,
	'dual' : dualWeaponSkills,
	'magi' : magicSkills
}


let entityGenerator = function(config){
	
	let person = _.cloneDeep(character);
	
	person.body = _.cloneDeep(characterBody);
	
	['name', 'age', 'gender', 'origin'].forEach(function(parameter){
		person.stats[parameter] = config[parameter];
	});

	config.weapons.forEach(function(weapon){
		person.inventory.weapons.push( _.cloneDeep(weapons[weapon]) );		
	});
	
	['martialSkills', 'passiveSkills', 'magicSkills'].forEach(function(skillCategory){
		config[skillCategory].forEach(function(skill){
			let category = skill.slice(0,4);
			person.skills[skillCategory].push( _.cloneDeep ( skillCodes[category][skill] ) )
			
		});
	}.bind(this));
	
	
	Object.keys(config.humours).forEach(function(h){ 
		person.humours[h].value = config.humours[h];
		person.battleData.humours[h].value = config.humours[h];
	});
	
	Object.keys(person.traits).forEach(function(t){ 
		person.traits[t].value = person.traits[t].calcValue.call(person);
	});
	
	Object.keys(person.resistence).forEach(function(t){ 
		person.resistence[t].value = person.resistence[t].calcValue.call(person);
	});
	
	Object.keys(person.combatTraits).forEach(function(t){ 
		person.combatTraits[t].value = person.combatTraits[t].calcValue.call(person);
	});
	

	return person;
}
	



module.exports = entityGenerator;
