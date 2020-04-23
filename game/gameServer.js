const mapEngine = require('./mapEngine.js')


const ongoingFights = require('./ongoingFights.js')
const getUpdatedFieldOfView = require('./getFieldOfView.js');
const createDataObj = require('./util.js').createDataObj;
const roundCounter = require('./roundCounter.js');

class fightEngine{
	
	constructor(){
	   
	}
	
	serialize (fightData){
		
		let clone = Object.assign({}, fightData);
		delete clone.gridFactory;
		delete clone.roundCounter;		
		
		['points', 'corners', 'fighters', 'fov'].forEach(function(prop){
			clone[prop] = JSON.stringify(clone[prop]);
		})
				
		return clone
		
	}
	
	getUpdatedFOV(fight, data){
		
		console.log('getting field of view');
		
		let f = fight.fighters.flat();
		let thisFighter; 

		f.forEach(function(fighter){
			if(fighter.id === data.player){
				fighter.battleData.facing = data.facing
				thisFighter = fighter 
			}
		}.bind(this));
		
		return getUpdatedFieldOfView.call(fight.gridFactory, thisFighter);	
	}
	
	initiateFight(...arg){
		let startingGrid = new mapEngine(...arg);
		let fightData = startingGrid.getStartingPositions();
		
		let id = fightData.id;
		
		fightData.roundCounter = roundCounter();
		fightData.round = fightData.roundCounter.next().value
		
		// insert text generator
		
		ongoingFights.set(id, fightData);
		
		return createDataObj(id, this.serialize(fightData))
	}
	
	finishUpdate(fight){
		let d = fight.gridFactory.getUpdatedPositions(fight.updates);
		d.round = fight.roundCounter.next().value
		return this.serialize(d);
	}
	
}

const f = new fightEngine();

module.exports = f;
