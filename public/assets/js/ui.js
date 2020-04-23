let flattenObject = function(ob) {
	var toReturn = {};
	
	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) continue;
		
		if ((typeof ob[i]) == 'object') {
			var flatObject = flattenObject(ob[i]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;
				
				toReturn[i + '.' + x] = flatObject[x];
			}
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
};


class UI{
	
	constructor(player, enemy){
		this.player = player;
		this.enemy = enemy;
		
		this.addSubscriptions();
	}
	
	resumeWorld(){
		 this.clear();
		 
		 $('#world-game-container').removeClass('hidden');
		 $('#fightScene').addClass('hidden');
		 
		 this.worldScene.resume('WorldScene');
	}
	
	populateDebug(){
		let parent = document.getElementById('debug-content-container');
		
		$(parent).empty();
		
		let populatePair = function(key, val){
			
			let firstLabel = document.createElement('LABEL');
			let secondLabel = document.createElement('LABEL');
			
			firstLabel.textContent = key + ' = ';
			
			secondLabel.textContent = JSON.stringify(val);
			
			[firstLabel, secondLabel, document.createElement('BR')].forEach(function(el){
				parent.appendChild(el);
			});
		}
	
		let flat = flattenObject(this.player);
		
		Object.keys(flat).forEach(function(key){
			
			return populatePair(key, flat[key])	
			
		}.bind(this))
		
	}
	
	
	/*** UI CLEARING FUNCTIONS ********************/
	
	clearDataLabels(){
		
		Array.from(document.querySelectorAll('.dataLabel')).forEach(function(label){
			label.parentElement.removeChild(label);
		})
		
	}
	
	clearActivehex(){
		
		if(document.querySelector('.hexTile.active')){
			
			document.querySelector('.hexTile.active').classList.remove('active');
			
		}
		
	}
	
	clearDefenseDirection(){
		
		if(document.querySelector('.playerTargeterContainer path.active')){
			
			document.querySelector('.playerTargeterContainer path.active').classList.remove('active');
			
		}
	}
	
	clearActiveMoveDirection(){
		
		Array.from(document.querySelectorAll('[data-movement]')).forEach(function(el){
			el.setAttribute('fill', '#fff');
		})
	}
	
	clearEnemies(){
		
		Array.from(document.querySelectorAll('div.small-profile')).forEach(function(label){
			$(label).remove();
		})
		
		Array.from(document.querySelectorAll('.enemyTargeterContainer')).forEach(function(label){
			$(label).remove();
		})
		
	}
	
	showAllHexes(){
		Array.from(document.querySelectorAll('.hexTile')).forEach(function(tile){
			if(tile.classList.contains('hiddenTile')){
				tile.classList.remove('hiddenTile');
			}
		})
	}
	
	clear(){
		
		this.clearEnemies();
		this.clearDataLabels();
		this.showAllHexes();
	}
	
	/*** UI DRAWING FUNCTIONS********************/
	
	drawFigure(type, parent){
		 let b = new bodyGenerator(type);
		 let body = b.generateBody()[0];
		 document.getElementById(parent).appendChild(body);
		 return body;
	}
	
	
	drawEnemyTargeter(boundingRect){
		let targeter = '<svg xmlns="http://www.w3.org/2000/svg" class="enemyTargeter" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 6.7515907 16.2076968" height="16.2076968cm" shaper:fusionaddin="version:1.5.0" version="1.1" viewBox="0 0 6.7515907 16.2076968" width="6.7515907cm" x="0cm" xml:space="preserve" y="0cm"><path xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" d="M3.3782413,-3.2668229 L3.3782413,4.2730972 0.1694837,0.932292 3.3782413,-3.2668229z" fill="none" shaper:cutDepth="0" shaper:pathType="guide" stroke="rgb(100,100,100)" transform="matrix(1,0,0,-1,3.3733495,8.1086048)" vector-effect="non-scaling-stroke" id="right"/><path xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" d="M0.2480465,1.3807637 L2.0005178,8.1086048 3.3782413,8.1086048 3.3782413,4.6397731 0.2480465,1.3807637z" fill="none" shaper:cutDepth="0" shaper:pathType="guide" stroke="rgb(100,100,100)" transform="matrix(1,0,0,-1,3.3733495,8.1086048)" vector-effect="non-scaling-stroke" id="top-right"/><path xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" d="M1.7380423,8.1086048 L0.0024459,1.4455477 -1.7331504,8.1086048 1.7380423,8.1086048z" fill="none" shaper:cutDepth="0" shaper:pathType="guide" stroke="rgb(100,100,100)" transform="matrix(1,0,0,-1,3.3733495,8.1086048)" vector-effect="non-scaling-stroke" id="top"/><path xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" d="M-0.2431547,1.3807637 L-1.995626,8.1086048 -3.3733495,8.1086048 -3.3733495,4.6397731 -0.2431547,1.3807637z" fill="none" shaper:cutDepth="0" shaper:pathType="guide" stroke="rgb(100,100,100)" transform="matrix(1,0,0,-1,3.3733495,8.1086048)" vector-effect="non-scaling-stroke" id="top-left"/><path xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" d="M-3.3733495,-3.2668229 L-0.1645919,0.932292 -3.3733495,4.2730972 -3.3733495,-3.2668229z" fill="none" shaper:cutDepth="0" shaper:pathType="guide" stroke="rgb(100,100,100)" transform="matrix(1,0,0,-1,3.3733495,8.1086048)" vector-effect="non-scaling-stroke" id="left"/><path xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" d="M-3.3733495,-8.099092 L-2.0987532,-8.099092 -0.2441199,0.4070245 -3.3733495,-3.7137717 -3.3733495,-8.099092z" fill="none" shaper:cutDepth="0" shaper:pathType="guide" stroke="rgb(100,100,100)" transform="matrix(1,0,0,-1,3.3733495,8.1086048)" vector-effect="non-scaling-stroke" id="bottom-left"/><path xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" d="M1.8436776,-8.099092 L0.0024459,0.3455591 -1.8387858,-8.099092 1.8436776,-8.099092z" fill="none" shaper:cutDepth="0" shaper:pathType="guide" stroke="rgb(100,100,100)" transform="matrix(1,0,0,-1,3.3733495,8.1086048)" vector-effect="non-scaling-stroke" id="bottom"/><path xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" d="M3.3782413,-8.099092 L2.103645,-8.099092 0.2481389,0.4110275 3.3782413,-3.6851559 3.3782413,-8.099092z" fill="none" shaper:cutDepth="0" shaper:pathType="guide" stroke="rgb(100,100,100)" transform="matrix(1,0,0,-1,3.3733495,8.1086048)" vector-effect="non-scaling-stroke" id="bottom-right"/></svg>'
		let div = document.createElement('DIV');
		div.classList.add('enemyTargeterContainer');
		div.innerHTML += targeter;
		div.style.top = (boundingRect.top - 100) + 'px';
		div.style.left = (boundingRect.left - 140) + 'px';
	    document.getElementById('enemies').appendChild(div);
	}
	
	drawEnemy(type, container, center){
		let body = this.drawFigure(['human.small'], 'enemies');
		let br = center.getBoundingClientRect();
		
		body.style.top = (br.top - 100) + 'px';
		body.style.left = (br.left - 50) + 'px';
		
		this.drawEnemyTargeter(br)
	}
	
	drawPlayerTargeter(body){
		let targeter = '<svg class="playerTargeter" xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 6.755741 16.2473351" height="16.2473351cm" shaper:fusionaddin="version:1.5.0" version="1.1" viewBox="0 0 6.755741 16.2473351" width="6.755741cm" x="0cm" xml:space="preserve" y="0cm"><path xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" d="M-0.9116693,-1.1203135 L-3.3365097,-7.5580459 -3.3365097,7.677129 -1.0093677,2.7266708 -1.8789498,0.9054846 -0.9116693,-1.1203135z" fill="none" shaper:cutDepth="0" shaper:pathType="guide" stroke="rgb(100,100,100)" transform="matrix(1,0,0,-1,3.3365097,8.1188172)" vector-effect="non-scaling-stroke" id="left"/><path xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" d="M-3.2634762,8.1188172 L3.3435103,8.1188172 0.8699342,3.0173574 0.016434,4.8750313 -0.86794,3.0228661 -3.2634762,8.1188172z" fill="none" shaper:cutDepth="0" shaper:pathType="guide" stroke="rgb(100,100,100)" transform="matrix(1,0,0,-1,3.3365097,8.1188172)" vector-effect="non-scaling-stroke" id="top"/><path xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" d="M1.7788327,1.0391071 L1.0072751,2.71843 3.4192313,7.6928063 3.4192313,-7.5825417 0.8990354,-1.1430485 1.8275876,0.877979 A0.127,0.127 335.3237897 0,1 1.7788327,1.0391071z" fill="none" shaper:cutDepth="0" shaper:pathType="guide" stroke="rgb(100,100,100)" transform="matrix(1,0,0,-1,3.3365097,8.1188172)" vector-effect="non-scaling-stroke" id="right"/><path xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" d="M0.016434,-3.0640621 L0.7517428,-1.463636 3.3601482,-8.1285179 -3.2799635,-8.1285179 -0.7599402,-1.4380834 0.016434,-3.0640621z" fill="none" shaper:cutDepth="0" shaper:pathType="guide" stroke="rgb(100,100,100)" transform="matrix(1,0,0,-1,3.3365097,8.1188172)" vector-effect="non-scaling-stroke" id="bottom"/><path xmlns="http://www.w3.org/2000/svg" xmlns:shaper="http://www.shapertools.com/namespaces/shaper" d="M0.6456968,-1.0860508 L1.5606991,0.9054846 0.7514387,2.666869 0.0120062,4.2762705 -0.7542299,2.6715243 -1.5974806,0.9054846 -0.6591376,-1.0597091 0.0120062,-2.4653013 0.6456968,-1.0860508z" fill="none" shaper:cutDepth="0" shaper:pathType="guide" stroke="rgb(100,100,100)" transform="matrix(1,0,0,-1,3.3365097,8.1188172)" vector-effect="non-scaling-stroke" id="center"/></svg>';
		let div = document.createElement('DIV');
		div.classList.add('playerTargeterContainer');
		let rect = body.getBoundingClientRect();
		div.innerHTML += targeter
	    document.getElementById('player-body').appendChild(div);
		div.style.top = '-22px';
		div.style.left = '10px';
	}
	
	drawSkills(){
		let s = this.player.skills.martialSkills.concat(this.player.skills.magicSkills);
		
		let bs = document.querySelectorAll('.skills button')
		
		s.forEach(function(skill, index){
			bs[index].id = skill.id
			bs[index].textContent = skill.name
		});
		
	}
	
	drawPlayer(){
		let body = this.drawFigure(['human.medium'], 'player-body');
		this.drawPlayerTargeter(body);
		return body;
	}
	
	drawPlayerName(){
		document.getElementById('player-name').textContent = this.player.stats.name;
	}
		
	
	drawMap(){
		function drawSymbolInColors(fillColor){
			return draw.symbol()
			.polygon(corners.map(({ x, y }) => `${x},${y}`))
			.stroke({ width: 1, color: '#999' }).fill(fillColor)
		}
		
		let el = document.querySelector('#svg-container');
		
		$(el).empty();
		
		let draw = SVG(el)
		// get the corners of a hex (they're the same for all hexes created with the same Hex factory)
		let corners = this.corners;
		
		let hexSymbol = drawSymbolInColors('none');
		let hexPlayer = drawSymbolInColors('#00ff00');
		let hexEnemy = drawSymbolInColors('#f06');
		
		let points = this.points.map(function(point){
			return Object.assign({}, point)
		})
		
		points.forEach(hex => {
			// use hexSymbol and set its position for each hex
			
			hex.x += 50;
			hex.y += 50;
			
			if(hex.inhabiting && hex.inhabiting === this.player.id){
				return draw.use(hexPlayer).translate(hex.x, hex.y)
			}else if(hex.inhabiting && hex.inhabiting === this.enemy.id){
				return draw.use(hexEnemy).translate(hex.x, hex.y)
			}else{
				return draw.use(hexSymbol).translate(hex.x, hex.y)
			}
		})
		
	}
	
	drawFacingDirection(){
		$('.facing').text(this.facing);	
	}
	
	drawTotalTicks(){
		$('.totalTicks').text(this.player.battleData.totalTicks);	
	}
	
	drawHumours(){
		let currentHumours = this.player.battleData.humours;
		let totalHumours = this.player.humours;
		
		Object.keys(totalHumours).forEach(function(humour){
			let st = currentHumours[humour].value + '/' +totalHumours[humour].value;
			document.getElementById(humour + '-stat').textContent = st;
		})
	}
	
	drawAlreadyDamagedBodyParts(){}
	
	
	drawTileDirection(index){
	
		let neighbor = directions[this.facing].neighbors[index];
		
		let paths = Array.from(document.querySelectorAll('.hexTile'));
		let centers = Array.from(document.querySelectorAll('.hexCenter'));
		
		let path = paths[index];
		path.dataset.id = neighbor;
		let label = document.createElement('label');
		let br = centers[index].getBoundingClientRect();
		label.className = 'dataLabel';
		label.style.top = (br.top ) +'px';
		label.style.left = (br.left) +'px';
		label.textContent = neighbor;
		document.body.appendChild(label);
		
	}
	
	drawFieldOfView(){
		let paths = Array.from(document.querySelectorAll('.hexTile'));
		let centers = Array.from(document.querySelectorAll('.hexCenter'));
		
		this.fov[this.player.id]['firstRow'].forEach(function(cell, index){
			if(cell){
				this.drawTileDirection(index)
				
				if(cell.inhabiting){
					return this.drawEnemy(['human.small'], 'enemies', centers[index])
				}
			}else{
				paths[index].classList.add('hiddenTile')
			}
		}.bind(this))	
		
		this.fov[this.player.id]['secondRow'].forEach(function(cell, index){
			if(cell){
				
				if(!cell.inhabiting) 
					return false;
				
				return this.drawEnemy(['human.small'], 'enemies', centers[index + 4]);
				
			}else{
				return paths[index + 4].classList.add('hiddenTile')
			}
		}.bind(this))	
		
	}
	
	drawRoundCounter(){
		$('#round').text(this.round)
	}
	
	/*** PUBSUB HANDLERS ********************/
	
	
	addSubscriptions(){
		
		PubSub.subscribe('addEvents', this.addEvents.bind(this));
		
		PubSub.subscribe('addPlayer', this.drawPlayer.bind(this));
		PubSub.subscribe('addPlayer', this.drawSkills.bind(this));
		PubSub.subscribe('addPlayer', this.drawAlreadyDamagedBodyParts.bind(this));
		PubSub.subscribe('addPlayer', this.drawHumours.bind(this));
		PubSub.subscribe('addPlayer', this.drawPlayerName.bind(this));
		
		PubSub.subscribe('addPlayer', this.populateDebug.bind(this));
		
		PubSub.subscribe('updateInterface', this.populateDebug.bind(this));
		PubSub.subscribe('updateInterface', this.drawRoundCounter.bind(this));
		
		PubSub.subscribe('updateInterface', this.clear.bind(this));
		PubSub.subscribe('updateInterface', this.drawFacingDirection.bind(this));
		PubSub.subscribe('updateInterface', this.drawMap.bind(this));
		PubSub.subscribe('updateInterface', this.drawFieldOfView.bind(this));
		PubSub.subscribe('updateInterface', this.drawTotalTicks.bind(this));
		PubSub.subscribe('updateInterface', this.drawHumours.bind(this));
		
		PubSub.subscribe('updateInterface', this.clearActivehex.bind(this));
		PubSub.subscribe('clearActiveHex', this.clearActivehex.bind(this));
		
		PubSub.subscribe('clearDefenseDirection', this.clearDefenseDirection.bind(this));
		
		PubSub.subscribe('clearPreviouMove', this.clearActiveMoveDirection.bind(this));
		
	}
	
	/*** EVENT HANDLERS ********************/
	
	showMap(){
		let m = Array.from(document.querySelectorAll('.side-container'));
		m.forEach(function(el){
			
			el.classList.remove('hidden');
			
			el.addEventListener('click', function(){
				if(el.classList.contains('side-folded')){
					el.classList.remove('side-folded');
					el.classList.add('side-full-width');
				}else{
					el.classList.add('side-folded');
					el.classList.remove('side-full-width');
				}
			})
			
		})
		
		
	}
	
	updateFacingDirection(e){
		let target;
	
		if(e.target.nodeName === 'path'){
			target = e.target
		}
		
		if(!target){ 
			return false;
		}
		
		let direction = target.dataset.movement;
		
		target.setAttribute('fill', '#edd2a4')
		
		let d = Object.keys(directions);
		let i = d.indexOf(this.facing);
		
		if(direction === 'right'){
			i += 1;
			if(i>5){
				i = 0;
			}
		}
		if(direction === 'left'){
			i -= 1;
			if(i<0){
				i = 5;
			}
		}
		
		f.facing = this.facing = d[i];
		
		this.drawFacingDirection();
		
		f.socket.emit('getUpdatedFieldOfView', { fightId : f.id, position : this.position, facing : this.facing, player : this.player.id });		
		
		
	}
	
	clickTile(e){
		// console.log('click')
		
		if(e.target.classList.contains('hexTile')){ 
			// don't process clicks on second row
			if(parseInt(e.target.id.split('tile')[1]) && parseInt(e.target.id.split('tile')[1]) > 4  )
				return false;
			
			let prev = document.querySelector('.hexTile.active');
			
			this.clearActivehex();
			
			if(prev && prev.id === e.target.id){ 
				return false;
			}
			return e.target.classList.add('active');
			
		}
	}
	
	
	addEvents(){
		
		document.getElementById('move-container').addEventListener('click', this.updateFacingDirection.bind(this));
		
		document.getElementById('tileMap').addEventListener('click', this.clickTile.bind(this));	
		
		document.getElementById('enemies').addEventListener('click', function(e){
			if(e.target.nodeName === 'path' && e.target.closest('.enemyTargeterContainer')){
				if(document.querySelector('.enemyTargeterContainer path.active')){
					document.querySelector('.enemyTargeterContainer path.active').classList.remove('active')
				}
				e.target.classList.add('active');
			}
		})
		
		document.querySelector('.playerTargeterContainer').addEventListener('click', function(e){
			if(e.target.nodeName === 'path'){
				if(document.querySelector('.playerTargeterContainer path.active')){
					document.querySelector('.playerTargeterContainer path.active').classList.remove('active')
				}
				e.target.classList.add('active');
			}
		})
		
	}
		
	
}


class bodyGenerator{ 
		
	constructor(bodyGroup){
		this.bodyGroup = bodyGroup
		
	}
	
	bodyMeasurements(type, subtype){	
		return sprites.bodyTypes[type][subtype];
	}
	
	generateImage(region, regionName){
		let img = document.createElement('IMG');
		Object.keys(region).forEach(function(prop){
			img[prop] = region[prop];		
		})
		img.className = regionName
		return img;
	}

	generateContainer(body){
		
		let d = document.createElement('DIV');
		d.className = 'ui vertical segment';	
		let innerD = document.createElement('DIV');
		d.appendChild(innerD)
		
		if(body === 'human.medium'){
			d.className += ' medium-profile';
		}
		
		if(body === 'human.small'){
			d.className += ' small-profile';
		}
		if(body === 'human.large'){
			d.className += ' large-profile';
		}
		innerD.className += 'human-body';
		
		return d;
	}
	
	generateBody(bodyType){
		
		let bodies = this.bodyGroup.map(function(body){
			//hack, riding on the loop
			// this.generateStyleSheet(body)
			
			return this.bodyMeasurements(...(body.split('.')));
		}.bind(this));
		
		
		let containers = this.bodyGroup.map(function(body){
			return this.generateContainer(body);
		}.bind(this));

		containers.forEach(function(container, index){
			
			let body = bodies[index];
			
			Object.keys(body).forEach(function(region){
				let img = this.generateImage(body[region], region);
				container.querySelector('div').appendChild(img);
				
			}.bind(this));
			
		}.bind(this))
		
		
		return containers;
	}
	
}

const sprites = {
		bodyTypes : {
			human : {
				'large' : { head: {width: 36.786100000000005, height: 61.77015000000001, src: "./assets/images/skeletons/human/head.svg"},
				'right-shoulder': {width: 71.1958, height: 30.2861, src: "./assets/images/skeletons/human/right-shoulder.svg"},
				'left-shoulder': {width: 71.1958, height: 30.2861, src: "./assets/images/skeletons/human/left-shoulder.svg"},
				'right-arm': {width: 101.6236, height: 77.5125, src: "./assets/images/skeletons/human/right-arm.svg"},
				'left-arm': {width: 101.6236, height: 77.5125, src: "./assets/images/skeletons/human/left-arm.svg"},
				'left-hand': {width: 58.5, height: 25.309700000000003, src: "./assets/images/skeletons/human/left-hand.svg"},
				'right-hand': {width: 58.5, height: 25.309700000000003, src: "./assets/images/skeletons/human/right-hand.svg"},
				'chest': {width: 56.2861, height: 29.290950000000002, src: "./assets/images/skeletons/human/chest.svg"},
				'stomach': {width: 48.9125, height: 69.9361, src: "./assets/images/skeletons/human/stomach.svg"},
				'right-leg': {width: 52, height: 162.90625, src: "./assets/images/skeletons/human/right-leg.svg"},
				'left-leg': {width: 52, height: 162.90625, src: "./assets/images/skeletons/human/left-leg.svg"},
				'right-foot': {width: 58.5, height: 25.309700000000003, src: "./assets/images/skeletons/human/right-foot.svg"},
				'left-foot': {width: 58.5, height: 25.309700000000003, src: "./assets/images/skeletons/human/left-foot.svg"} },
				medium : { 'head': {width: 28.297, height: 47.5155, src: "./assets/images/skeletons/human/head.svg"}, 'right-shoulder': {width: 54.766, height: 23.297, src: "./assets/images/skeletons/human/right-shoulder.svg"}, 'left-shoulder': {width: 54.766, height: 23.297, src: "./assets/images/skeletons/human/left-shoulder.svg"}, 'left-hand': {width: 45, height: 19.469, src: "./assets/images/skeletons/human/left-hand.svg"}, 'right-arm' : { width : '78.172', height : '59.625', src : './assets/images/skeletons/human/right-arm.svg'}, 'left-arm' : { width : '78.172', height : '59.625', src : './assets/images/skeletons/human/left-arm.svg'}, 'right-hand': {width: 45, height: 19.469, src: "./assets/images/skeletons/human/right-hand.svg"}, 'chest': {width: 43.297, height: 22.5315, src: "./assets/images/skeletons/human/chest.svg"}, 'stomach': {width: 37.625, height: 53.797, src: "./assets/images/skeletons/human/stomach.svg"}, 'right-leg': {width: 40, height: 125.3125, src: "./assets/images/skeletons/human/right-leg.svg"}, 'left-leg': {width: 40, height: 125.3125, src: "./assets/images/skeletons/human/left-leg.svg"}, 'right-foot': {width: 45, height: 19.469, src: "./assets/images/skeletons/human/right-foot.svg"}, 'left-foot': {width: 45, height: 19.469, src: "./assets/images/skeletons/human/left-foot.svg"} },
				small : { 'head' : {width: 16.9782, height: 28.5093, src: "./assets/images/skeletons/human/head.svg"}, 'right-shoulder': {width: 32.8596, height: 13.9782, src: "./assets/images/skeletons/human/right-shoulder.svg"}, 'left-shoulder': {width: 32.8596, height: 13.9782, src: "./assets/images/skeletons/human/left-shoulder.svg"}, 'right-arm' : { width : '46.903', height : '35.775', src : './assets/images/skeletons/human/right-arm.svg'}, 'left-arm' : { width : '46.903', height : '35.775', src : './assets/images/skeletons/human/left-arm.svg'}, 'left-hand': {width: 27, height: 11.6814, src: "./assets/images/skeletons/human/left-hand.svg"}, 'right-hand': {width: 27, height: 11.6814, src: "./assets/images/skeletons/human/right-hand.svg"}, 'chest': {width: 25.978199999999998, height: 13.5189, src: "./assets/images/skeletons/human/chest.svg"}, 'stomach': {width: 22.575, height: 32.2782, src: "./assets/images/skeletons/human/stomach.svg"}, 'right-leg': {width: 24, height: 75.1875, src: "./assets/images/skeletons/human/right-leg.svg"}, 'left-leg': {width: 24, height: 75.1875, src: "./assets/images/skeletons/human/left-leg.svg"}, 'right-foot': {width: 27, height: 11.6814, src: "./assets/images/skeletons/human/right-foot.svg"}, 'left-foot': {width: 27, height: 11.6814, src: "./assets/images/skeletons/human/left-foot.svg"} }
			}
		},
		armor : {
			
		}
}

const directions = {
	
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
