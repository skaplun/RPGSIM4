const bladedWeaponSkills = {
	
	"blad0" : {
		"name" : "Slash",
		"type" : "haftedWeaponSkill",
		"attackPhase" : "primary",
		"id" : "blad0",
		"ticks" : 80,
		"cost" : function(){
			this.sanguis -= 5;
			this.cholera -= 5;
			this.phlegma -= 5;
			this.melancholia -= 5;
		},
		"damage" : function(){
			return this.dmg += Math.random(0, 40);
		},
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
	},
	"blad1" : {
		"name" : "Hew",
		"type" : "haftedWeaponSkill",
		"attackPhase" : "primary",
		"id" : "blad1",
		"ticks" : 90,
		"cost" : function(){
			this.sanguis -= 6;
			this.cholera -= 6;
			this.phlegma -= 6;
			this.melancholia -= 6;
		},
		"damage" : function(){
			return this.dmg += Math.random(20, 30);
		},
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
	},
	
	"blad2" : {
        "name" : "Bladed Weapon Skills",
		"id" : "blad2",
        "type" : "bladedWeaponSkill",
        "attackPhase" : "passive",
        "id" : "blad0",
		"ticks" : 0,
		"cost" : false,
		"damage" : false,
		"toHitModifier" : false,
        "effects" : []   
    },

}

module.exports = bladedWeaponSkills;