const basicMartialSkills = {
"basicMartialSkills" : {
        "name" : "Basic Martial Skills",
        "type" : "basicMartialSkills",
        "mode" : "passive",
        "id" : "mar0",
        "effects" : []   
    }
   "windUp" : {
        "name" : "Wind Up",
		"type" : "basicMartialSkills",
		"attackPhase" : "preparatory",
		"id" : "mar1",
		"ticks" : 40,
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
   "shove" : {
        "name" : "Shove",
		"type" : "basicMartialSkills",
		"attackPhase" : "secondary",
		"id" : "mar2",
		"ticks" : 50,
		"cost" : function(){
			this.sanguis -= 2;
			this.cholera -= 2;
			this.phlegma -= 2;
			this.melancholia -= 2;
		},
		"damage" : {
			min : 1,
			max : 10
		},
		"toHitModifier" : ,
		"effects" : []	
   },
   "rest" : {
        "name" : "Rest",
		"type" : "basicMartialSkills",
		"attackPhase" : "preparatory",
		"id" : "mar3",
		"ticks" : 80,
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
   "recoup" : {
        "name" : "Recoup",
		"type" : "basicMartialSkills",
		"attackPhase" : "preparatory",
		"id" : "mar4",
		"ticks" : 70,
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
   "concentrate" : {
        "name" : "Concentrate",
		"type" : "basicMartialSkills",
		"attackPhase" : "preparatory",
		"id" : "mar5",
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
   }

}

module.exports = martialSkills;