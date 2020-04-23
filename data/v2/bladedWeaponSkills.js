const bladedWeaponSkills = {
    
	"bladedWeaponSkills" : {
        "name" : "Bladed Weapon Skills",
        "type" : "bladedWeaponSkills",
        "mode" : "passive",
        "id" : "blad0",
		"ticks" : 0,
		"cost" : false,
		"damage" : false,
		"toHitModifier" : ,
        "effects" : []   
    },
    
	"slash" : {
		"name" : "Slash",
		"type" : "bladedWeaponSkills",
		"attackPhase" : "primary",
		"id" : "blad1",
		"ticks" : 80,
		"cost" : function(){
			this.sanguis -= 5;
			this.cholera -= 5;
			this.phlegma -= 5;
			this.melancholia -= 5;
		},
		"damage" : false,
		"toHitModifier" : ,
		"effects" : []	
	},
    
	"hew" : {
		"name" : "Hew",
		"type" : "bladedWeaponSkills",
		"attackPhase" : "primary",
		"id" : "blad2",
		"ticks" : 90,
		"cost" : function(){
			this.sanguis -= 6;
			this.cholera -= 6;
			this.phlegma -= 6;
			this.melancholia -= 6;
		},
		"damage" : false,
		"toHitModifier" : ,
		"effects" : []	
	}


}