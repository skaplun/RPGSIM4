const magicSkills = {
	
	"magi0" : {
		"name" : "Roc's Cry",
		"type" : "magicSkill",
		"id" : "magi0",
		"ticks" : 65,
		"cost" : function(){
			this.sanguis -= 10;
			this.melancholia -= 10;
		},
		"damage" : {
			min : 20,
			max : 40
		},
		"effects" : []				
	},
	"magi1" : {
		"name" : "Invigorate",
		"type" : "magicSkill",
		"id" : "magi1",
		"ticks" : 50,
		"cost" : function(){
			this.sanguis -= 15;
			this.melancholia -= 15;
		},
		"damage" : false,
		"effects" : [function(){
			this.sanguis += 30;
			this.melancholia += 30;
			this.nextRound.ticks += 40;
		}]				
	},
	"magi2" : {
		"name" : "Galvanic Flash",
		"type" : "magicSkill",
		"id" : "magi2",
		"ticks" : 60,
		"cost" : function(){
			this.sanguis -= 10;
			this.melancholia -= 10;
		},
		"damage" : false,
		"effects" : []				
	},
	"magi3" : {
		"name" : "Ice Spike",
		"type" : "magicSkill",
		"id" : "magi3",
		"ticks" : 60,
		"cost" : function(){
			this.sanguis -= 20;
			this.phlegma -= 20;
		},
		"damage" : {
			min : 60,
			max : 100
		},
		"effects" : []				
	},
	"magi4" : {
		"name" : "Boreas Breath",
		"type" : "magicSkill",
		"id" : "magi4",
		"ticks" : 60,
		"cost" : function(){
			this.phlegma -= 10;
			this.melancholia -= 10;
		},
		"damage" : {
			min : 20,
			max : 40
		},
		"effects" : []				
	},
	"magi5" : {
		"name" : "Squall",
		"type" : "magicSkill",
		"id" : "magi5",
		"ticks" : 55,
		"cost" : function(){
			this.sanguis -= 25;
		},
		"damage" : {
			min : 40,
			max : 90
		},
		"effects" : []				
	}

}

module.exports = magicSkills;