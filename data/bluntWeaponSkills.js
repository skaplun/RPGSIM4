const bluntWeaponSkills = {

	"blun0" : {
		"name" : "armorCrack",
		"type" : "bluntWeaponSkill",
		"attackPhase" : "primary",
		"id" : "blun0",
		"ticks" : 60,
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
	 "blun1" : {
        "name" : "Blunt Weapon Skills",
        "type" : "bluntWeaponSkill",
        "mode" : "passive",
        "id" : "blun1",
        "effects" : []   
    }
	
}

module.exports = bluntWeaponSkills 