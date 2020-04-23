const magicSkills = {
    
    "galvanicMagicSkills" : {
        "name" : "Galvanic Magic Skills",
        "type" : "galvanicMagicSkills",
        "mode" : "passive",
        "id" : "galv0",
        "effects" : []   
    },
    
	"rocsCry" : {
		"name" : "Roc's Cry",
		"type" : "galvanicMagicSkills",
		"id" : "galv1",
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
    
	"invigorate" : {
		"name" : "Invigorate",
		"type" : "galcMagicSkills",
		"id" : "galv2",
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
    
	"galvanicFlash" : {
		"name" : "Galvanic Flash",
		"type" : "galvanicMagicSkills",
		"id" : "galv3",
		"ticks" : 60,
		"cost" : function(){
			this.sanguis -= 10;
			this.melancholia -= 10;
		},
		"damage" : false,
		"effects" : []				
	},
    
    "iceMagicSkills" : {
        "name" : "Ice Magic Skills",
        "type" : "iceMagicSkills",
        "mode" : "passive",
        "id" : "ice0",
        "effects" : []   
    },
    
	"iceSpike" : {
		"name" : "Ice Spike",
		"type" : "iceMagicSkills",
		"id" : "ice1",
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
    
	"boreasBreath" : {
		"name" : "Boreas Breath",
		"type" : "iceMagicSkill",
		"id" : "ice2",
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
    
	"squall" : {
		"name" : "Squall",
		"type" : "iceMagicSkill",
		"id" : "ice3",
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