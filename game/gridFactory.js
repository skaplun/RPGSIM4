
const Honeycomb = require('honeycomb-grid')

let assignStartingPosition = function(hex, fightGroups){	
	
	if(fightGroups.length === 2){
	
		if(hex.x === -2 && hex.y === -1){
			hex.inhabiting = fightGroups[0][0].id;
			fightGroups[0][0].battleData.position = { x : -2, y : -1};					
			fightGroups[0][0].battleData.facing = 'SE';
		}						
		else if(hex.x === 2 && hex.y === 1 ){
			hex.inhabiting = fightGroups[1][0].id;		
			fightGroups[1][0].battleData.position = { x : 2, y : 1};						
			fightGroups[1][0].battleData.facing = 'NW';					
		}else{
			hex.inhabiting = false;				
		}
		hex.obstacle = false;
		
	}
	
}

class gridFactory {
	
	constructor(length, fightGroups){
		this.Hex = Honeycomb.extendHex({
			size: 10,           // default: 1
			orientation: 'flat', // default: 'pointy'
			
		});
		this.corners = this.Hex().corners();
		this.Grid = Honeycomb.defineGrid(this.Hex);
		this.grid = this.Grid.hexagon({ 
			radius : length,
			onCreate : function(hex){
				return assignStartingPosition(hex, fightGroups);
			}
		});
		
	}
	
}


module.exports = gridFactory;