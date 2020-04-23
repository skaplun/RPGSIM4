
const dualWeaponSkills = {

	"dual0" : {
		"name" : "Cross Block",
		"type" : "dualWeaponSkill",
		"attackPhase" : "defensive",
		"id" : "dual0",
		"ticks" : 80,
		"cost" : function(){
			this.sanguis -= 3;
			this.cholera -= 3;
			this.phlegma -= 3;
			this.melancholia -= 3;
		},
		"damage" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
	},
	"dual1" : {
		"name" : "Flurry",
		"type" : "dualWeaponSkill",
		"attackPhase" : "defensive",
		"id" : "dual1",
		"ticks" : 80,
		"cost" : function(){
			this.sanguis -= 6;
			this.cholera -= 6;
			this.phlegma -= 6;
			this.melancholia -= 6;
		},
		"damage" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
	},
	 "dual2" : {
        "name" : "Basic Dual Skills",
        "type" : "dualWeaponSkill",
        "attackPhase" : "passive",
		"ticks" : 0,
        "id" : "dual2",
		"damage" : false,
		"cost" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
        "effects" : []   
    }


}

module.exports = dualWeaponSkills;