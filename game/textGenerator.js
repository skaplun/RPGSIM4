
function attackText{
	
	
	attack(entity, type){
		
		if(type === 'enemy'){
			return 	"you attack the " + entity;		
		}else{
			return 	entity + " attacks you ";		
		}
	}
	
	attackRegion(dmgType, region, type){
		
		if(type === 'enemy'){
			return "attempting to " + dmgType + " their " + region;
		}else{
			return "attempting to " + dmgType + " your " + region;			
		}
		
	}
	
	counterAttack(entity, type, success, counterType){
		
		if(success){
			if(type === 'enemy'){
				return 'the ' + entity + ' successfully ' + counterType;
			}else{
				return 'you successfully ' + counterType;
			}
			
		}else{
			if(type === 'enemy'){
				return entity + ' failed to counter';
			}else{
				return 'you failed to counter';
				
			}
			
		}

	} 
	
	result(entity, type, success, dmgType, subregion, dmg){
		
		if(success){
			if(type === 'enemy'){
				return 'you managed to ' + dmgType + ' their ' + subregion +  ' doing ' + dmg + ' damage';
			}else{
				return entity + ' managed to ' + dmgType + ' your ' + subregion +  ' doing ' + dmg + ' damage';
			}
			
		}else{
			if(type === 'enemy'){
				return 'you failed to hit your enemy';
			}else{
				return entity + ' failed to hit you';
				
			}
			
		}
		
	}
	
	final(entity, type, success, subregion, isDead){
		
		if(!success) return ' ';
		
			
		if(isDead){
			
			if(type === 'enemy'){
				return 'you believe you damaged their ' + subregion + ', killing them';
			}else{
				return entity + ' damaged your ' + subregion + ', killing you';
			}
		}else{
			if(type === 'enemy'){
				return 'you believe you damaged their ' + subregion;
			}else{
				return entity + ' damaged your ' + subregion;
			}
			
		}
					
	}
	
	sequence(entity, type, dmgType, region, subregion, dmg, counterType, counterSuccess, attackSuccess, isDead){
		return this.attack(entity, type) + ', ' + 
		this.attackRegion(dmgType, region, type) + ', ' + 
		this.counterAttack(entity, type, counterSuccess, counterType) + ', ' + 
		this.result(entity, type, attackSuccess, dmgType, subregion, dmg) + ', ' + this.final(entity, type, attackSuccess, subregion, isDead);
	}
	
	sequence(...arg)
}

function youAttack(entity, type, dmgType, region, subregion, dmg, counterType, counterSuccess, attackSuccess, isDead){
	return 	`you attack the ${entity}, attempting to ${dmgType} their ${region} `	
}

function theyAttack(entity, type, dmgType, region, subregion, dmg, counterType, counterSuccess, attackSuccess, isDead){
	
}

function attackText(entity, type, ...args){
	
	return {
		youAttack : youAttack(...args),
		theyAttack : theyAttack(...args)
	}
}


class textGenerator{
	
	constructor(){
		
	}
	
	useItem (item){
		return `You use ${item}`
	}
	
	
	heal(item, heal){
		if(item){
			return `${this.useItem(item)}, healing for ${item.effects.heal}`
		}else{
			return `you heal for ${heal}`
		}
	}
	
	initWalk(corner, facing){
		return `You enter the battle from ${corner}, facing ${facing}`
	}
	
	ongoingWalk(direction, facing){
	   return	`You walk ${direction} , facing ${facing} `
	}
	
	generate(...args){
		
		let patterns = {
			attack : attackText,
			walk : walk,
			useItem : useItem,
			heal : heal,
			
		}
	
		return patterns[pattern](...args);
	}
}

module.exports = attackText;



/*
walk sim

let a = walk('SW', 'NW')
a.next().value
// "You enter the battle from SW, facing NW"

b = a.next().value
b('SW', 'NW')
b('SW', 'NW')
b('SW', 'NW')
b('SW', 'NW')


*/

