// const Honeycomb = require('honeycomb-grid')
const gridFactory = require('./gridFactory.js')
const util = require('./util.js')
const getUpdatedFieldOfView = require('./getFieldOfView.js');

class mapGenerator {
	
	constructor(...arg){
		this.fighters = [...arg]
		this.gridF = new gridFactory(util.generateMapLength(this.fighters), this.fighters);	
	}	
	
	generateHex(x, y){
		return this.gridF.Grid(this.gridF.Hex(x, y))[0];
	}
	
	validateCoordinate(coordinate){
		return this.gridF.Grid.isValidHex(coordinate) && this.gridF.grid.includes(coordinate) ? true : false;
	}
	
	getSpecificNeighbor(coordinate, direction){	
		return this.gridF.grid.neighborsOf(coordinate, direction)
	}
	
	initiateFightRound(){
		console.log('fight round started')
		// console.log('fight calculations')
	}
	
	fieldOfView(){
		
		let FoV = {};
		
		let f = this.fighters.flat();
		f.forEach(function(fighter){
			FoV[fighter.id] = getUpdatedFieldOfView.call(this, fighter);						
		}.bind(this));
		
		
		return FoV;
	}
	
		// when player makes a decision

	
	_executeMove(fighter, update){
		let currentPosition = this.gridF.grid.get(this.gridF.grid.indexOf(fighter.battleData.position))
		
		let newPosition = this.getSpecificNeighbor(currentPosition, update.updates.direction)[0];
		
		if(!newPosition && !currentPosition){
			console.log('bad tile')
			return false;
		}
		
		if(this.gridF.grid.get(this.gridF.grid.indexOf(newPosition)).inhabiting){
			return this.initiateFightRound();
		}

		this.gridF.grid.get(this.gridF.grid.indexOf(currentPosition)).inhabiting = false;
		this.gridF.grid.get(this.gridF.grid.indexOf(newPosition)).inhabiting = fighter.id;
		
		fighter.battleData.position.x = newPosition.x;
		fighter.battleData.position.y = newPosition.y;

	}
	
		// when player doesn't make a decision
	executeMove(update, playerId){
		console.log('executing move');
		
		let f = this.fighters.flat();
		
		f.forEach(function(fighter){
			if(fighter.id !== playerId){
					return false;
			}
			return this._executeMove(fighter, update);	
			
		}.bind(this));
		
		
	
		
		// console.log(this.fighters);
	}
	
	update(updates){
		console.log('map engine update')
		
		Object.keys(updates).forEach(function(player){
			if(!updates[player].updates['direction'])
				return false;
			
			return this.executeMove(updates[player], player);	
		}.bind(this))
				
	}

}


class mapEngine extends mapGenerator{
		
	constructor(...arg){
		super(...arg);
	}
	
	generateUpdateObj(){
		return {id: util.ID(), fighters : this.fighters, gridFactory : this, corners : this.gridF.corners, points : util.gridInPoint(this.gridF), updates : {}, fov : this.fieldOfView() }
		
	}
	
	getUpdatedPositions(updates){
		super.update(updates)
		return this.generateUpdateObj();
	}
	
	getStartingPositions(){
		return this.generateUpdateObj();
	}
}



module.exports = mapEngine;

/*

let a = new mapEngine([{'id' :'113' }], [{'id' :'115' }]);
let b = a.getStartingPositions();

console.log(a.gridF.grid)
	

let updates = {
	'113' : {
		'facing' : 'SE',
		updates : {
			direction : 'S'
		}
	}, 
	'115' : {
		'facing' : 'NW',
		updates : {
			direction : 'N'
		}
	}
}

a.getUpdatedPositions(updates)

console.log(a.gridF.grid)



updates = {
	'113' : {
		facing : 'S',
		updates : {
			direction : 'S'
		}
	}, 
	'115' : {
		facing : 'N',
		updates : {
			direction : 'N'
		}
	}
}

let x =  a.getUpdatedPositions(updates).gridFactory.gridF.grid

console.log(a.gridF.grid);

let y =  a.getUpdatedPositions(updates).gridFactory.gridF.grid

console.log(y);




let fighter = { id: '115', position: { x: 2, y: 1 }, facing: 'NW' };

a.getUpdatedFieldOfView(fighter);

let fighter = { id: '115', position: { x: 2, y: 1 }, facing: 'NW' };

setTimeout(function(){
console.log(v.gridFactory.gridF.grid)
	
	setTimeout(function(){
		console.log(x.gridFactory.gridF.grid)
			
		}, 10000)

}, 10000)

let y = a.getUpdatedPositions(updates)

// console.log(y.gridFactory.gridF.grid)

a.getMapUpdate(updates)


a.getMapUpdate(updates)
a.getMapUpdate(updates)



a.getMapUpdate(updates)
a.getMapUpdate(updates)
a.getMapUpdate(updates)
a.getMapUpdate(updates)




console.log(v)


console.log(z)


// new mapEngine([{'id' :'114' }], [{'id' :'1176' }]);
// new mapEngine([{'id' :'11323' }], [{'id' :'11543' }]);
// new mapEngine([{'id' :'11345' }], [{'id' :'115432' }]);

*/


