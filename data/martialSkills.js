const martialSkills = {

   "mart0" : {
        "name" : "Wind Up",
		"type" : "martialSkill",
		"attackPhase" : "preparatory",
		"id" : "mart0",
		"ticks" : 40,
		"cost" : function(){
			this.sanguis -= 4;
			this.cholera -= 4;
			this.phlegma -= 4;
			this.melancholia -= 4;
		},
		"damage" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
   },
   "mart1" : {
        "name" : "Shove",
		"type" : "martialSkill",
		"attackPhase" : "secondary",
		"id" : "mart1",
		"ticks" : 50,
		"cost" : function(){
			this.sanguis -= 8;
			this.cholera -= 8;
			this.phlegma -= 8;
			this.melancholia -= 8;
		},
		"damage" : {
			min : 1,
			max : 10
		},
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
   },
   "mart2" : {
        "name" : "Rest",
		"type" : "martialSkill",
		"attackPhase" : "preparatory",
		"id" : "mart2",
		"ticks" : 80,
		"cost" : function(){
			this.sanguis -= 4;
			this.cholera -= 4;
			this.phlegma -= 4;
			this.melancholia -= 4;
		},
		"damage" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
   },
   "mart3" : {
        "name" : "Recoup",
		"type" : "martialSkill",
		"attackPhase" : "preparatory",
		"id" : "mart3",
		"ticks" : 70,
		"cost" : function(){
			this.sanguis -= 4;
			this.cholera -= 4;
			this.phlegma -= 4;
			this.melancholia -= 4;
		},
		"damage" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
   },
   "mart4" : {
        "name" : "Concentrate",
		"type" : "martialSkill",
		"attackPhase" : "preparatory",
		"id" : "mart4",
		"ticks" : 60,
		"cost" : function(){
			this.sanguis -= 4;
			this.cholera -= 4;
			this.phlegma -= 4;
			this.melancholia -= 4;
		},
		"damage" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
		"effects" : []	
   },
   "mart5" : {
        "name" : "Basic Martial Skills",
        "type" : "martialSkill",
        "attackPhase" : "passive",
        "id" : "mar5",
		"ticks" : 0,
		"cost" : false,
		"damage" : false,
		"toHitModifier" : function(){
			return this.toHit
		},
        "effects" : []   
    }

}

module.exports = martialSkills;