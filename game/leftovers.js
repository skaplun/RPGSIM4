

let GridUtil = {
	
		
	isNeighbor(coordinate){
		if(!this.validateCoordinate(coordinate))
			throw "invalid coordinate to neighbor"
	},
	
	getDistance(coordinate, target){
		return this.Hex(coordinate).distance(Hex(target))
	},
	
	equalHex(coordinate, target){
		return this.Hex(coordinate).equals(Hex(target))
	},
	
	generateHex(x, y){
		return this.Grid(this.Hex(x, y));
	},
	
	includes(hexObj){
		return this.grid.includes(hexObj)
	},
	

	deserialize(){
		return JSON.parse(this.grid)
	},
	
	isInhabiting : function(hex){
				console.log(arguments)
				console.log(this)
				if(hex.inhabiting)
					return true;
			},
			hasObstacle : function(hex){
				if(hex.obstacle)
					return true;
			},
			inhabit : function(val){
				this.inhabiting = val;
			},
			unInhabit : function(){
				this.inhabiting = false;
			}
}


serialize(){
		return JSON.stringify(this.gridF.grid)
	}
	
	_getDistance(f1, f2){
		let h1 = this.generateHex(f1.position.x, f1.position.y)
		let h2 = this.generateHex(f2.position.x, f2.position.y)
		this.distance = h1.distance(h2)  
	}
	
	getDistance(){
		this.fighters.forEach(function(g, i){
			g.forEach(function(f){
				this.fighters.forEach(function(group, index){
					if(i === index) return false;
					group.forEach(function(fighter){
						return this._getDistance(f, fighter)
					}.bind(this))
				}.bind(this))
			}.bind(this))
		}.bind(this))
	}
	
	
	broadCastUpdate(s, message, data){
		return s.emit(message, data);
	}
	
	broadCastUpdates(sockets, message, data){
		sockets.forEach(function(socket){
			this.broadCastUpdate(socket, message, data)
		}.bind(this))
	}
	
	
	
	// let nextStep0 = this.gridF.grid.neighborsOf(temp.firstRow[0], neighborArray[0]);
		// let nextStep = this.gridF.grid.neighborsOf(temp.firstRow[1], neighborArray[1]);
		// let nextStep2 = this.gridF.grid.neighborsOf(temp.firstRow[2], neighborArray[2]);
		
		// console.log(temp.firstRow)
		// console.log(nextStep)
		
		// console.log(nextStep2)
		
		// let r0 = nextStep0.map(function(step){
			// if(temp.firstRow.includes(step)){ 
				// return false;
			// }
			// return step;
		// })
		
		// let r1 = nextStep.map(function(step){
			// if(temp.firstRow.includes(step) || r0.includes(step)){ 
				// return false;
			// }
			// return step;
		// })
		
		// let r2 = nextStep2.map(function(step){
			// if(temp.firstRow.includes(step) || r0.includes(step) || r1.includes(step)){
				// return false;
			// }
			
			// return step;			
		// })
		
		// temp.secondRow = r0.concat(r1).concat(r2)
		// console.log(temp)