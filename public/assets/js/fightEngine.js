
class fightEngine{
	
	constructor(player, enemy, scene, socket){
		this.player = player;
		this.enemy = enemy; 
		this.worldScene = scene;
		this.socket = socket;
		this.round = 0;
		
		this.UI = new UI(player, enemy);	
		
		this.UI.showMap();
		

	}
	
	/*** SOCKET EMIT  FUNCTIONS********************/
	
	initiate(){
		console.log('initiating fight')
		this.socket.emit('fightStart', { player : this.player, enemy : this.enemy } );
	}
	
	updateServerOnFightDecisions(){
		this.socket.emit('fightUpdate', { fightId : this.id, playerId : this.player.id, enemyId : this.enemy.id, updates : this.getDecisions() });
	}
	
	updateFightBasedOnServer(data){
		console.log('got updated data of fight from server')
		this.updateFightData(data)
	}
	
	
		
	/*** SOCKET RECEIVE FUNCTIONS********************/
	
	getInitialFightData(fight){
		let data = fight[Object.keys(fight)[0]];

		this.id = data.id;
		
		this.updateFightData(fight);
		
		PubSub.publish('addPlayer');
		PubSub.publish('addEvents');
		
	}
	
	updateFightData(dObj){
		
		let data = dObj[Object.keys(dObj)[0]];
		['corners', 'points', 'fov'].forEach(function(attr){
			this[attr] = this.UI[attr] = JSON.parse(data[attr]);			
		}.bind(this));
		
		let f = JSON.parse(data.fighters).flat();
		
		this.round = this.UI.round = data.round;
		
		f.forEach(function(fighter){
				if(fighter.id === this.player || fighter.id === this.player.id){
					this.player = this.UI.player = fighter;
					['facing', 'position'].forEach(function(attr){
						this[attr] = this.UI[attr] = fighter.battleData[attr];			
					}.bind(this));
				}else{
					this.enemy  = this.UI.enemy = fighter;
				}
								
		}.bind(this))
	
		this.roundCounter = this.UI.roundCounter = data.roundCounter;
		
		
		
		PubSub.publish('updateInterface');
		
	}
	
	updateFieldOfView(dObj){
		// console.log('got updated Field of View ', dObj)
		
		this.fov = this.UI.fov = dObj;
		
		PubSub.publish('updateInterface');
	}
	
	getDecisions(){
		let decisions = {};
		
		let chosenDirection = document.querySelector('#tileMap').querySelector('path.active');
		let chosenDefense = document.querySelector('.playerTargeterContainer').querySelector('path.active');
		
		// if movement no option to do other things.
		if(chosenDirection){
			decisions['direction'] = chosenDirection.dataset.id;
			return decisions;
		}
		
		if(document.querySelector('.enemyTargeterContainer') && document.querySelector('.enemyTargeterContainer').querySelector('path.active')){
			decisions['attack'] = document.querySelector('.enemyTargeterContainer').querySelector('path.active').id;
		}
		
		if(chosenDefense){
			decisions['defense'] = chosenDefense.id;
		}

		PubSub.publish('clearActiveHex');
		
		PubSub.publish('clearDefenseDirection');
		
		return decisions;
	}
	
	
	/*** EVENT RELATED  FUNCTIONS********************/
	
	
};




