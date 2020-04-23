
let util = {
	
	getRandomInt : function(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
}


const attackDirections = {
	'top-right' : ['head', 'chest', 'right-shoulder', 'right-arm'],
	'top' : ['head', 'chest', 'right-shoulder', 'left-shoulder'],
	'top-left' : ['head', 'chest', 'left-shoulder', 'left-arm'],
	'left' : ['chest', 'left-shoulder', 'left-arm', 'left-hand'],
	'right' : ['chest', 'right-shoulder', 'right-arm', 'right-hand'],
	'bottom-left' : ['stomach', 'left-hand', 'left-leg', 'left-foot'],
	'bottom' :  [ 'stomach', 'left-leg', 'right-leg', 'left-hand', 'right-hand'],
	'bottom-right' : [ 'stomach', 'right-hand', 'right-leg', 'right-foot'],
}


let calculator = class {
	
	constructor(fighters){
		this.fighters = fighters;
		
		let bodyRegion;
		let bodySubregion;
		let dmgAmount;
		let counterSuccessChance;
		let attackSuccessChance;
		let attackDirection;
	}
	
	
	region(playerIsAttacked){
		//monster attacks random region, if player doesn't set direction attack random region
		if(!fightEngine.attackDirection){
			let bodyPartsArray = Object.keys(playerIsAttacked ? player.body : enemy.body);
			
			bodyRegion  = bodyPartsArray[Math.floor(Math.random() * bodyPartsArray.length)];
			return bodyRegion;
			
		}else{
			//player attacks based on player choice
			attackDirection = fightEngine.attackDirection.split('attack-')[1];
			let directions = {
				'top-right' : ['head', 'chest', 'right-shoulder', 'right-arm'],
				'top' : ['head', 'chest', 'right-shoulder', 'left-shoulder'],
				'top-left' : ['head', 'chest', 'left-shoulder', 'left-armg'],
				'left' : ['chest', 'stomach', 'left-arm', 'left-hand'],
				'right' : ['chest', 'stomach', 'right-arm', 'right-hand'],
				'bottom-left' : ['stomach', 'left-hand', 'left-leg', 'left-foot'],
				'bottom' :  [ 'stomach', 'left-leg', 'right-leg', 'left-hand', 'right-hand'],
				'bottom-right' : [ 'stomach', 'right-hand', 'right-leg', 'right-foot'],
			}
			
			let possibleRegions = directions[attackDirection];
			
			bodyRegion = possibleRegions[Math.floor(Math.random() * possibleRegions.length)];
			return bodyRegion;
		}
		
	}
	
	subregion(playerIsAttacked){
		let organsArray = Object.keys(playerIsAttacked ? player.body[bodyRegion].organs : enemy.body[bodyRegion].organs);
		
		bodySubregion = organsArray[Math.floor(Math.random() * organsArray.length)];
		return bodySubregion;
	}
	
	dmg(){
		dmgAmount = util.getRandomInt(10, 35);
		return dmgAmount;
		
	}
	
	counterSuccess(playerIsAttacked){
	
		if(!fightEngine.defenseDirection){
			let successChance = Math.random();
			counterSuccessChance = successChance > 0.55 ? true : false;
			return counterSuccessChance	
		}else{
			let direction = fightEngine.defenseDirection.split('defense-')[1];
			let directions = {
				'top' : ['top-right', 'top', 'top-left'],
				'left' : ['top-left', 'left', 'bottom-left'],
				'right' : ['top-right', 'right', 'top-left'],
				'bottom' :  ['bottom-right', 'bottom', 'bottom-left'],
				'center' : [ 'top', 'left', 'right', 'bottom'],
			}
			
			let defendedAreas = directions[direction];
			
			if(defendedAreas.includes(attackDirection)){
				return true
			}else{
				let successChance = Math.random();
				counterSuccessChance = successChance > 0.2 ? true : false;
				return counterSuccessChance	
			
			}
		
		}
		
	}
	
	attackSuccess(){
		if(counterSuccessChance)
			return false;
		
		let successChance = Math.random();
		attackSuccessChance = successChance > 0.2 ? true : false;
		return attackSuccessChance
	}
	
	isDead(playerIsAttacked){
		if(counterSuccessChance || !attackSuccessChance)
			return false;
		
		let damagedPerson = playerIsAttacked ? fightEngine.player : fightEngine.enemy;
		
		damagedPerson.body[bodyRegion].hp = damagedPerson.body[bodyRegion].hp - dmgAmount;
		
		fightEngine.UI.drawBodies(playerIsAttacked, damagedPerson.body, bodyRegion)
		
		if(damagedPerson.body[bodyRegion].hp < 0){
			fightEngine.killed = true;
			return true;
			
		}else{
			return false;
		}
	}
	
	isPlayerAttacked(defender){
		return defender === 'enemy' ? false : true;
	}
	
	run(){
			
	}
	
}


module.exports = calculator;