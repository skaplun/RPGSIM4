
const fieldsOfView = {
	
   'SE': {
		neighbors : ['NE', 'SE', 'S', 'SW']
	},
	'SW' : {
		neighbors : ['SE', 'S', 'SW', 'NW']
	},
	'W' : {
		neighbors : ['S', 'SW', 'NW', 'N']
	},
	'NW' : {
		neighbors : ['SW', 'NW', 'N', 'NE']
	},
	'NE' : {
		neighbors : ['NW', 'N', 'NE', 'SE']
	},
	'E' : {
		neighbors : ['N', 'NE', 'SE', 'S']
	}
	
}

//gets the map context

let getUpdatedFieldOfView = function(fighter){
		let self = this;
		
		function getFOVSnippet(tile, neighbor, position){
			
			let generatedTile, generatedRow;
			
			generatedTile = self.generateHex(tile);
			
			generatedRow = self.gridF.grid.neighborsOf(generatedTile, neighbor);
			
			generatedRow.shift();
			
			if(position === 'last'){
				generatedRow.pop();
			}
			
			return generatedRow;
		}
		
		let h = this.generateHex(fighter.battleData.position.x, fighter.battleData.position.y);
			
		if(!this.validateCoordinate(h)){
			return false;
		}
		
		let temp = {}, secondPartSecondRow, firstPartSecondRow;
		
		let n = fieldsOfView[fighter.battleData.facing].neighbors;

		temp.firstRow = this.gridF.grid.neighborsOf(h, n);
		
		if(temp.firstRow[1] !== undefined){
			firstPartSecondRow = getFOVSnippet(temp.firstRow[1], n, 'first')
		}
		
		if(temp.firstRow[2] !== undefined){
			secondPartSecondRow = getFOVSnippet(temp.firstRow[2], n, 'last')
		}
		
		if(!( Array.isArray(firstPartSecondRow) ) ){
			firstPartSecondRow = [undefined, undefined, undefined]
		}
		
		if(!( Array.isArray(secondPartSecondRow) ) ){
			secondPartSecondRow = [undefined, undefined]
		}
		
		temp.secondRow = firstPartSecondRow.concat(secondPartSecondRow)
		
		// console.log(temp.secondRow)

		return temp
}


module.exports = getUpdatedFieldOfView;