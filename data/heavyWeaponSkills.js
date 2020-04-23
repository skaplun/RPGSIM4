
const heavyWeaponSkills = {

	"heav1" : {
		"name" : "Rattle",
		"type" : "heavyWeaponSkill",
		"attackPhase" : "primary",
		"id" : "heav1",
		"ticks" : 65,
		"cost" : function(){
			this.sanguis -= 4;
			this.cholera -= 4;
			this.phlegma -= 4;
			this.melancholia -= 4;
		},
		"damage" : function(){
			return this.dmg += 10;
		},
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
	},
	"heav2" : {
		"name" : "Heavy Blow",
		"type" : "heavyWeaponSkill",
		"attackPhase" : "primary",
		"id" : "heav2",
		"ticks" : 85,
		"cost" : function(){
			this.sanguis -= 5;
			this.cholera -= 5;
			this.phlegma -= 5;
			this.melancholia -= 5;
		},
		"damage" : function(){
			return this.dmg += Math.random(20, 40);
		},
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
	},
	 "heav0" : {
        "name" : "Heavy Weapon Skills",
        "type" : "heavyWeaponSkill",
        "attackPhase" : "passive",
		"ticks" : 0,
        "id" : "heav0",
		"damage" : false,
		"cost" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
        "effects" : []   
    }
}

module.exports = heavyWeaponSkills