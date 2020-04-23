const basicAttackSkills = {

    "basicAttackSkills" : {
        "name" : "Basic Attack Skills",
        "type" : "basicAttackSkills",
        "mode" : "passive",
        "id" : "batt0",
        "effects" : []   
    },
	"strike" : {
        "name" : "Strike",
		"type" : "basicAttackSkills",
		"attackPhase" : "primary",
		"id" : "batt1",
		"ticks" : 50,
		"cost" : function(){
			this.sanguis -= 4;
			this.cholera -= 4;
			this.phlegma -= 4;
			this.melancholia -= 4;
		},
		"damage" : false,
		"toHitModifier" : ,
		"effects" : []	
   },
   "feint" : {
        "name" : "Feint",
		"type" : "basicAttackSkills",
		"attackPhase" : "preparatory",
		"id" : "batt2",
		"ticks" : 50,
		"cost" : function(){
			this.sanguis -= 2;
			this.cholera -= 2;
			this.phlegma -= 2;
			this.melancholia -= 2;
		},
		"damage" : false,
		"toHitModifier" : ,
		"effects" : []	
   },
   "riposte" : {
        "name" : "Riposte",
		"type" : "basicAttackSkills",
		"attackPhase" : "counterAttack",
		"id" : "batt3",
		"ticks" : 70,
		"cost" : function(){
			this.sanguis -= 3;
			this.cholera -= 3;
			this.phlegma -= 3;
			this.melancholia -= 3;
		},
		"damage" : false,
		"toHitModifier" : ,
		"effects" : []	
   },
   "parry" : {
        "name" : "Parry",
		"type" : "basicAttackSkills",
		"attackPhase" : "defensive",
		"id" : "batt4",
		"ticks" : 60,
		"cost" : function(){
			this.sanguis -= 1;
			this.cholera -= 1;
			this.phlegma -= 1;
			this.melancholia -= 1;
		},
		"damage" : false,
		"toHitModifier" : ,
		"effects" : []	
   },

}


module.exports = oneHandAttackSkills;