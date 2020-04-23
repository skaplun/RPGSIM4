const haftedWeaponSkills = {
	
    "haftedWeaponSkills" : {
        "name" : "Hafted Weapon Skills",
        "type" : "haftedWeaponSkills",
        "mode" : "passive",
        "id" : "haft0",
        "effects" : []   
    }
    
	"reach" : {
        "name" : "Reach",
		"type" : "haftedWeaponSkills",
		"attackPhase" : "primary",
		"id" : "haft1",
		"ticks" : 100,
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
       
   "sweep" : {
        "name" : "Sweep",
		"type" : "haftedWeaponSkills",
		"attackPhase" : "primary",
		"id" : "haft2",
		"ticks" : 120,
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
       
   "shaftBlock" : {
        "name" : "Shaft Block",
		"type" : "haftedWeaponSkills",
		"attackPhase" : "defensive",
		"id" : "haft3",
		"ticks" : 75,
		"cost" : function(){
			this.sanguis -= 3;
			this.cholera -= 3;
			this.phlegma -= 3;
			this.melancholia -= 3;
		},
		"damage" : false,
		"toHitModifier" : ,
		"effects" : []	
   }


}


module.exports = haftedWeaponSkills