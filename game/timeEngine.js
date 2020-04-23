const fightEngine = require('./gameServer.js')
const createDataObj = require('./util.js').createDataObj;

function killFight(ongoingFights, fight, otherFighters){
	ongoingFights.splice(fight, 1);
	
	otherFighters.forEach(function(fighter){
		io.sockets.connected[fighter.id].emit('resumeWorld');
	})
}

function gameLoop(ongoingFights, io){
	ongoingFights.forEach(function(fight, id){
		let f = fight.fighters.flat();
		f.forEach(function(fighter){
			if(io.sockets.connected[fighter.id]){
				io.sockets.connected[fighter.id].emit('fightPreUpdate');
			}else{
				// killFight(ongoingFights, id);
			}				
			
		})
	})
}

function fightResolve(ongoingFights, io){
	ongoingFights.forEach(function(fight, id){

		let r = fightEngine.finishUpdate(fight);
		
		let f = fight.fighters.flat();
		
		f.forEach(function(fighter){
			if(io.sockets.connected[fighter.id]){
				io.sockets.connected[fighter.id].emit('fightUpdate', createDataObj(fighter.id, r));
			}else{
				// killFight(ongoingFights, fight);
			}
		});
		
		fight.updates = {};
		
	})
}

function lockRound(ongoingFights, io){
	let t = setTimeout(function(){
		console.log('locking Round')
		fightResolve(ongoingFights, io);
		clearTimeout(t);
		return timeEngine(ongoingFights, io);
	}, 500)
	return t;
}


function timeEngine(ongoingFights, io){
	let t = setTimeout(function(){
		console.log('timeEngine')
		gameLoop(ongoingFights, io);
		clearTimeout(t);
		return lockRound(ongoingFights, io);
	}, 8000)
	return t;
}


module.exports = timeEngine;