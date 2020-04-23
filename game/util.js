
let util = {
	isOdd : function (n) {
		   return Math.abs(n % 2) == 1;
	},
	
	ID : function () {
		  // Math.random should be unique because of its seeding algorithm.
		  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
		  // after the decimal.
		  return '_' + Math.random().toString(36).substr(2, 9);
	},
	generateMapLength : function (fighters){
		//player + enemies + allies + make sure even;
		
		let size = fighters.reduce(function(total, fighterArray){
			if(Array.isArray(total))
				return total.length + fighterArray.length;
			return total + fighterArray.length;
		
		});
		
		if (util.isOdd(size)){
			size += 1;
		}
		console.log(size)
		return size;
	},
	
	gridInPoint : function (gridF){
		return gridF.grid.map(function(hex){
			let point = hex.toPoint()
			if(hex.inhabiting)
				point.inhabiting = hex.inhabiting
			return point;
		});
	},
	createDataObj : function(k, v){
		let temp = {};
		temp[k] = v;
		return temp
	}
}


module.exports = util;