
const heavyWeaponSkills = {

    "heavyWeaponSkills" : {
        "name" : "Heavy Weapon Skills",
        "type" : "heavyWeaponSkills",
        "mode" : "passive",
        "id" : "heav0",
        "effects" : []   
    }
    
	"rattle" : {
		"name" : "Rattle",
		"type" : "heavyWeaponSkills",
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
		"toHitModifier" : ,
		"effects" : []	
	},
	"crossBlock" : {
		"name" : "Cross Block",
		"type" : "heavyWeaponSkills",
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
		"toHitModifier" : ,
		"effects" : []	
	},
}

module.exports