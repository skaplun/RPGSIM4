const basicAttackSkills = {
	
	"batt0" : {
        "name" : "Strike",
		"type" : "basicAttackSkill",
		"attackPhase" : "primary",
		"id" : "batt0",
		"ticks" : 50,
		"cost" : function(){
			this.sanguis -= 16;
			this.cholera -= 16;
			this.phlegma -= 16;
			this.melancholia -= 16;
		},
		"damage" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
   },
   "batt1" : {
        "name" : "Feint",
		"type" : "basicAttackSkill",
		"attackPhase" : "preparatory",
		"id" : "batt1",
		"ticks" : 50,
		"cost" : function(){
			this.sanguis -= 4;
			this.cholera -= 4;
			this.phlegma -= 4;
			this.melancholia -= 4;
		},
		"damage" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
   },
   "batt2" : {
        "name" : "Riposte",
		"type" : "basicAttackSkill",
		"attackPhase" : "counterAttack",
		"id" : "batt2",
		"ticks" : 70,
		"cost" : function(){
			this.sanguis -= 3;
			this.cholera -= 3;
			this.phlegma -= 3;
			this.melancholia -= 3;
		},
		"damage" : function(){
			return this.dmg * 0.75;
		},
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
   },
   "batt3" : {
        "name" : "Parry",
		"type" : "basicAttackSkill",
		"attackPhase" : "defensive",
		"id" : "batt3",
		"ticks" : 60,
		"cost" : function(){
			this.sanguis -= 1;
			this.cholera -= 1;
			this.phlegma -= 1;
			this.melancholia -= 1;
		},
		"damage" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
   },
   
    "batt4" : {
        "name" : "Basic Attack Skills",
        "type" : "basicAttackSkill",
        "attackPhase" : "passive",
		"ticks" : 0,
        "id" : "batt4",
		"damage" : false,
		"cost" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
        "effects" : []   
    },

}


module.exports = basicAttackSkills;