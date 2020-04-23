const bluntWeaponSkills = {
    "bluntWeaponSkills" : {
        "name" : "Blunt Weapon Skills",
        "type" : "bluntWeaponSkills",
        "mode" : "passive",
        "id" : "blu1",
        "effects" : []   
    }
	"armorCrack" : {
		"name" : "Armor Crack",
		"type" : "bluntWeaponSkill",
        "mode" : "active",
		"attackPhase" : "primary",
		"id" : "blu2",
		"ticks" : 60,
		"cost" : function(){
			this.sanguis -= 5;
			this.cholera -= 5;
			this.phlegma -= 5;
			this.melancholia -= 5;
		},
		"damage" : false,
		"toHitModifier" : ,
		"effects" : []	
	}
	
}

module.exports = bluntWeaponSkills 