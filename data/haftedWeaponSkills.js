const haftedWeaponSkills = {
	
	"haft1" : {
        "name" : "Reach",
		"type" : "haftedWeaponSkill",
		"attackPhase" : "primary",
		"id" : "haft1",
		"ticks" : 100,
		"cost" : function(){
			this.sanguis -= 20;
			this.cholera -= 20;
			this.phlegma -= 20;
			this.melancholia -= 20;
		},
		"damage" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
   },
   "haft2" : {
        "name" : "Sweep",
		"type" : "haftedWeaponSkill",
		"attackPhase" : "primary",
		"id" : "haft2",
		"ticks" : 120,
		"cost" : function(){
			this.sanguis -= 20;
			this.cholera -= 20;
			this.phlegma -= 20;
			this.melancholia -= 20;
		},
		"damage" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
   },
   "haft3" : {
        "name" : "Shaft Block",
		"type" : "haftedWeaponSkill",
		"attackPhase" : "defensive",
		"id" : "haft3",
		"ticks" : 75,
		"cost" : function(){
			this.sanguis -= 12;
			this.cholera -= 12;
			this.phlegma -= 12;
			this.melancholia -= 12;
		},
		"damage" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
   },
   	
    "haft4" : {
        "name" : "Hafted Weapon Skills",
        "type" : "haftedWeaponSkills",
        "attackPhase" : "passive",
        "id" : "haft4",
		"ticks" : 0,
		"cost" : false,
		"damage" : false,
		"toHitModifier" : false,
        "effects" : []   
    }


}

module.exports = haftedWeaponSkills;
module.exports = haftedWeaponSkills